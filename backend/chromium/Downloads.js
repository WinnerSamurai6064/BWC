import fs from "fs/promises";
import path from "path";
import BrowserConfig from "../config/browser.config.js";

export class Downloads {

    constructor() {

        this.items = [];

        this.directory = BrowserConfig.downloads.path;

    }

    async initialize() {

        await fs.mkdir(this.directory, {
            recursive: true
        });

    }

    add(download) {

        const item = {

            id: crypto.randomUUID(),

            filename: download.suggestedFilename(),

            url: download.url(),

            state: "downloading",

            progress: 0,

            startedAt: Date.now()

        };

        this.items.push(item);

        return item;

    }

    update(id, progress) {

        const item = this.items.find(d => d.id === id);

        if (!item) return;

        item.progress = progress;

    }

    complete(id) {

        const item = this.items.find(d => d.id === id);

        if (!item) return;

        item.progress = 100;

        item.state = "completed";

        item.completedAt = Date.now();

    }

    failed(id) {

        const item = this.items.find(d => d.id === id);

        if (!item) return;

        item.state = "failed";

    }

    list() {

        return this.items;

    }

    clearCompleted() {

        this.items = this.items.filter(item => {

            return item.state !== "completed";

        });

    }

}
