import { chromium } from "playwright";

export async function launchBrowser(profilePath) {

    return await chromium.launchPersistentContext(profilePath, {

        headless: false,

        viewport: null,

        ignoreHTTPSErrors: true,

        acceptDownloads: true,

        bypassCSP: false,

        deviceScaleFactor: 1,

        locale: "en-US",

        timezoneId: "UTC",

        colorScheme: "light",

        permissions: [

            "clipboard-read",
            "clipboard-write"

        ],

        args: [

            "--disable-session-crashed-bubble",

            "--disable-infobars",

            "--no-first-run",

            "--no-default-browser-check",

            "--disable-backgrounding-occluded-windows",

            "--disable-renderer-backgrounding",

            "--disable-dev-shm-usage",

            "--password-store=basic",

            "--enable-features=OverlayScrollbar",

            "--enable-gpu",

            "--ozone-platform=wayland"

        ]

    });

}
