class ChromiumBridge {

    constructor() {

        this.connected = false;

        this.socket = null;

    }

    async connect() {

        if (this.connected) return;

        // Placeholder.
        // Later this becomes:
        // ws://localhost:PORT
        // or
        // /api/browser

        console.log("Connecting to Chromium...");

        this.connected = true;

    }

    async navigate(url) {

        console.log("Navigate:", url);

        /*
        Later:

        this.socket.send(JSON.stringify({
            action: "navigate",
            url
        }));
        */

    }

    async back() {

        console.log("Back");

    }

    async forward() {

        console.log("Forward");

    }

    async reload() {

        console.log("Reload");

    }

    async newTab() {

        console.log("New Tab");

    }

    async closeTab(id) {

        console.log("Close Tab", id);

    }

    async switchTab(id) {

        console.log("Switch Tab", id);

    }

    async installExtension(extensionId) {

        console.log("Install Extension", extensionId);

    }

    async removeExtension(extensionId) {

        console.log("Remove Extension", extensionId);

    }

    async suspendTab(id) {

        console.log("Suspend", id);

    }

    async wakeTab(id) {

        console.log("Wake", id);

    }

    async browserState() {

        /*
        Future response:

        {
            tabs:[],
            activeTab:1,
            downloads:[],
            history:[],
            profile:{}
        }
        */

    }

}

export default new ChromiumBridge();
