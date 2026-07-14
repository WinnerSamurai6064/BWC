import fs from "fs";
import os from "os";

export class Environment {

    constructor() {

        this.platform = os.platform();

        this.architecture = os.arch();

        this.release = os.release();

    }

    isLinux() {

        return this.platform === "linux";

    }

    isArm64() {

        return this.architecture === "arm64";

    }

    isX64() {

        return this.architecture === "x64";

    }

    isDocker() {

        return fs.existsSync("/.dockerenv");

    }

    isProot() {

        return (
            process.env.PROOT !== undefined ||
            process.env.TERMUX_VERSION !== undefined
        );

    }

    hasWayland() {

        return !!process.env.WAYLAND_DISPLAY;

    }

    hasX11() {

        return !!process.env.DISPLAY;

    }

    supportsGPU() {

        return this.hasWayland() || this.hasX11();

    }

    summary() {

        return {

            platform: this.platform,

            architecture: this.architecture,

            release: this.release,

            docker: this.isDocker(),

            proot: this.isProot(),

            wayland: this.hasWayland(),

            x11: this.hasX11(),

            gpu: this.supportsGPU()

        };

    }

}

export default new Environment();
