import fs from "fs/promises";
import BrowserConfig from "../config/browser.config.js";

export class Extensions {

    constructor(context) {

        this.context = context;

        this.directory =
            BrowserConfig.extensions.path;

        this.extensions = [];

    }

    async loadInstalled() {

        try {

            const folders =
                await fs.readdir(this.directory);

            this.extensions = folders.map(folder => ({

                id: folder,

                enabled: true,

                mobileUI: true

            }));

        } catch {

            this.extensions = [];

        }

    }

    list() {

        return this.extensions;

    }

    enable(id) {

        const extension =
            this.extensions.find(e => e.id === id);

        if (extension) {

            extension.enabled = true;

        }

    }

    disable(id) {

        const extension =
            this.extensions.find(e => e.id === id);

        if (extension) {

            extension.enabled = false;

        }

    }

    isEnabled(id) {

        const extension =
            this.extensions.find(e => e.id === id);

        return extension
            ? extension.enabled
            : false;

    }

}
