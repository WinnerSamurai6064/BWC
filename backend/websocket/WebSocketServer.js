import { WebSocketServer } from "ws";

export class BrowserWebSocket {

    constructor(server, runtime) {

        this.runtime = runtime;

        this.clients = new Set();

        this.wss = new WebSocketServer({

            server,
            path: "/ws"

        });

        this.initialize();

    }

    initialize() {

        this.wss.on("connection", (socket) => {

            console.log("WebSocket Connected");

            this.clients.add(socket);

            socket.send(JSON.stringify({

                type: "runtime",

                payload: this.runtime.status()

            }));

            socket.on("close", () => {

                this.clients.delete(socket);

                console.log("WebSocket Disconnected");

            });

            socket.on("message", async (message) => {

                await this.handle(socket, message);

            });

        });

    }

    async handle(socket, message) {

        try {

            const data = JSON.parse(message);

            switch (data.type) {

                case "ping":

                    socket.send(JSON.stringify({

                        type: "pong"

                    }));

                    break;

                case "runtime":

                    socket.send(JSON.stringify({

                        type: "runtime",

                        payload: this.runtime.status()

                    }));

                    break;

                default:

                    socket.send(JSON.stringify({

                        type: "error",

                        message: "Unknown event"

                    }));

            }

        } catch (error) {

            socket.send(JSON.stringify({

                type: "error",

                message: error.message

            }));

        }

    }

    broadcast(type, payload) {

        const message = JSON.stringify({

            type,

            payload

        });

        for (const client of this.clients) {

            if (client.readyState === 1) {

                client.send(message);

            }

        }

    }

}
