import BrowserConfig from "../config/browser.config.js";

export class Viewport {

    constructor(context) {

        this.context = context;

        this.width = BrowserConfig.viewport.width;
        this.height = BrowserConfig.viewport.height;
        this.scale = BrowserConfig.viewport.deviceScaleFactor;

    }

    async update({

        width,

        height,

        scale = 1

    }) {

        this.width = width;
        this.height = height;
        this.scale = scale;

        const pages = this.context.pages();

        for (const page of pages) {

            await page.setViewportSize({

                width,
                height

            });

        }

    }

    current() {

        return {

            width: this.width,

            height: this.height,

            scale: this.scale

        };

    }

}
