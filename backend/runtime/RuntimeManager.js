import { Sessions } from "../chromium/Sessions.js";
import { Tabs } from "../chromium/Tabs.js";
import { Cookies } from "../chromium/Cookies.js";
import { Extensions } from "../chromium/Extensions.js";
import { Downloads } from "../chromium/Downloads.js";
import { Viewport } from "../chromium/Viewport.js";
import { ChromiumBridge } from "../chromium/ChromiumBridge.js";

export class RuntimeManager {

    constructor() {

        this.bridge = new ChromiumBridge();

        this.sessions = new Sessions();

        this.tabs = new Tabs(this.sessions);

        this.cookies = null;

        this.extensions = null;

        this.downloads = new Downloads();

        this.viewport = null;

    }

    async initialize() {

        await this.bridge.initialize();

        await this.sessions.load();

        await this.downloads.initialize();

        this.cookies = new Cookies(
            this.bridge.getContext()
        );

        this.extensions = new Extensions(
            this.bridge.getContext()
        );

        this.viewport = new Viewport(
            this.bridge.getContext()
        );

        await this.extensions.loadInstalled();

        console.log("Runtime Manager Ready.");

    }

    async shutdown() {

        await this.sessions.save();

        await this.bridge.shutdown();

    }

    status() {

        return {

            browser: this.bridge.getStatus(),

            tabs: this.tabs.count(),

            downloads: this.downloads.list().length,

            extensions: this.extensions.list().length,

            viewport: this.viewport.current()

        };

    }

}
