const BrowserConfig = {

    runtime: {

        host: process.env.HOST || "0.0.0.0",

        port: Number(process.env.PORT) || 3000

    },

    browser: {

        maxTabs: 5,

        suspendAfterMinutes: 10,

        defaultHomepage: "https://google.com",

        restorePreviousSession: true,

        allowExtensions: true,

        acceptDownloads: true

    },

    viewport: {

        width: 390,

        height: 844,

        deviceScaleFactor: 3,

        orientation: "portrait"

    },

    profile: {

        path: "./backend/browser-profile/Default"

    },

    downloads: {

        path: "./backend/browser-profile/Downloads"

    },

    wallpapers: {

        path: "./backend/browser-profile/Wallpapers"

    },

    extensions: {

        path: "./backend/browser-profile/Extensions"

    },

    websocket: {

        heartbeat: 30000,

        reconnectDelay: 2000

    },

    security: {

        rateLimit: 120,

        trustProxy: true

    }

};

export default BrowserConfig;
