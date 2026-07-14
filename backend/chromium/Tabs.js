import BrowserConfig from "../config/browser.config.js";

export class Tabs {

    constructor(session) {

        this.session = session;

    }

    list() {

        return this.session.getTabs();

    }

    active() {

        return this.session.getActiveTab();

    }

    create(url) {

        if (!url) {
            url = BrowserConfig.browser.defaultHomepage;
        }

        return this.session.addTab(url);

    }

    close(index) {

        this.session.removeTab(index);

    }

    switch(index) {

        if (
            index < 0 ||
            index >= this.session.getTabs().length
        ) {
            return false;
        }

        this.session.setActiveTab(index);

        return true;

    }

    canCreate() {

        return (
            this.session.getTabs().length <
            BrowserConfig.browser.maxTabs
        );

    }

    count() {

        return this.session.getTabs().length;

    }

}
