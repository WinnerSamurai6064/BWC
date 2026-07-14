import { ChromiumBridge } from "../chromium/ChromiumBridge.js";

export class BrowserRuntime {

    constructor() {

        this.bridge = new ChromiumBridge();

        this.started = false;

    }

    async start() {

        if (this.started) return;

        console.log("Starting Browser Runtime...");

        await this.bridge.initialize();

        this.started = true;

        console.log("Browser Runtime Ready.");

    }

    async stop() {

        if (!this.started) return;

        console.log("Stopping Browser Runtime...");

        await this.bridge.shutdown();

        this.started = false;

        console.log("Browser Runtime Stopped.");

    }

    getStatus() {

        return {

            running: this.started,

            chromium: this.bridge.getStatus()

        };

    }

}
