import { EventEmitter } from "node:events";

class BrowserEventBus extends EventEmitter {

    emitEvent(type, payload = {}) {

        this.emit(type, payload);

    }

    onEvent(type, callback) {

        this.on(type, callback);

    }

    onceEvent(type, callback) {

        this.once(type, callback);

    }

    remove(type, callback) {

        this.off(type, callback);

    }

}

export default new BrowserEventBus();
