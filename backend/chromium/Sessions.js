import fs from "fs/promises";
import BrowserConfig from "../config/browser.config.js";

const SESSION_FILE = "./backend/browser-profile/session.json";

export class Sessions {

    constructor() {

        this.data = {
            activeTab: 0,
            tabs: []
        };

    }

    async load() {

        try {

            const raw = await fs.readFile(
                SESSION_FILE,
                "utf8"
            );

            this.data = JSON.parse(raw);

            console.log("Session restored.");

        } catch {

            console.log("Starting fresh session.");

        }

    }

    async save() {

        await fs.writeFile(

            SESSION_FILE,

            JSON.stringify(
                this.data,
                null,
                4
            )

        );

    }

    getTabs() {

        return this.data.tabs;

    }

    getActiveTab() {

        return this.data.activeTab;

    }

    setActiveTab(index) {

        this.data.activeTab = index;

    }

    addTab(url) {

        if (
            this.data.tabs.length >=
            BrowserConfig.browser.maxTabs
        ) {

            return false;

        }

        this.data.tabs.push({

            id: crypto.randomUUID(),

            url,

            suspended: false,

            createdAt: Date.now()

        });

        return true;

    }

    removeTab(index) {

        this.data.tabs.splice(index, 1);

        if (
            this.data.activeTab >=
            this.data.tabs.length
        ) {

            this.data.activeTab =
                Math.max(
                    0,
                    this.data.tabs.length - 1
                );

        }

    }

}
