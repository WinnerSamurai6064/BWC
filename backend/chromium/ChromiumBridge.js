import { chromium } from "playwright";

export class ChromiumBridge {

    constructor() {

        this.browser = null;
        this.context = null;
        this.ready = false;

    }

    async initialize() {

        if (this.ready) return;

        console.log("Launching Chromium...");

        this.browser = await chromium.launchPersistentContext(

            "./backend/browser-profile/Default",

            {
                headless: false,

                viewport: {
                    width: 390,
                    height: 844
                },

                deviceScaleFactor: 3,

                ignoreHTTPSErrors: true,

                args: [

                    "--start-maximized",

                    "--disable-session-crashed-bubble",

                    "--disable-infobars",

                    "--no-default-browser-check",

                    "--disable-dev-shm-usage"

                ]

            }

        );

        this.context = this.browser;

        this.ready = true;

        console.log("Chromium Ready.");

    }

    async shutdown() {

        if (!this.ready) return;

        await this.context.close();

        this.ready = false;

    }

    async newPage() {

        return await this.context.newPage();

    }

    getStatus() {

        return {

            running: this.ready,

            pages: this.context
                ? this.context.pages().length
                : 0

        };

    }

}
