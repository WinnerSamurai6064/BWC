export class Cookies {

    constructor(context) {

        this.context = context;

    }

    async all() {

        return await this.context.cookies();

    }

    async get(domain) {

        const cookies = await this.context.cookies();

        return cookies.filter(cookie => {

            return cookie.domain.includes(domain);

        });

    }

    async clear() {

        await this.context.clearCookies();

    }

    async remove(domain) {

        const cookies = await this.context.cookies();

        const keep = cookies.filter(cookie => {

            return !cookie.domain.includes(domain);

        });

        await this.context.clearCookies();

        await this.context.addCookies(keep);

    }

    async import(cookies) {

        await this.context.addCookies(cookies);

    }

}
