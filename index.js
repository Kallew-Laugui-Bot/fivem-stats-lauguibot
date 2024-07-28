const fetch = require('node-fetch');

class Stats {
    constructor(ip) {
        if (!ip) throw new Error('Please provide an IP.');
        this.ip = ip;
        this.baseUrl = `http://${this.ip}/info.json`; // Define a base URL to avoid repetition
    }

    async fetchJson(url) {
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            throw new Error(`Fetch error: ${error.message}`);
        }
    }

    async getPlayers() {
        const url = `http://${this.ip}/players.json`;
        const data = await this.fetchJson(url);
        return data.length;
    }

    async getPlayersAll() {
        const url = `http://${this.ip}/players.json`;
        return await this.fetchJson(url);
    }

    async getServerStatus() {
        try {
            await this.fetchJson(this.baseUrl);
            return { online: true };
        } catch {
            return { online: false };
        }
    }

    async getResources() {
        const data = await this.fetchJson(this.baseUrl);
        return data.resources;
    }

    async getOnesync() {
        const data = await this.fetchJson(this.baseUrl);
        return data.vars.onesync_enabled;
    }

    async getMaxPlayers() {
        const data = await this.fetchJson(this.baseUrl);
        return data.vars.sv_maxClients;
    }

    async getLocale() {
        const data = await this.fetchJson(this.baseUrl);
        return data.vars.locale;
    }

    async getGamename() {
        const data = await this.fetchJson(this.baseUrl);
        return data.vars.gamename;
    }

    async getEnhancedHostSupport() {
        const data = await this.fetchJson(this.baseUrl);
        return data.vars.sv_enhancedHostSupport;
    }

    async getlicenseKeyToken() {
        const data = await this.fetchJson(this.baseUrl);
        return data.vars.sv_licenseKeyToken;
    }

    async getScriptHookAllowed() {
        const data = await this.fetchJson(this.baseUrl);
        return data.vars.sv_scriptHookAllowed;
    }

    async getTags() {
        const data = await this.fetchJson(this.baseUrl);
        return data.vars.tags;
    }

    async getServer() {
        return await this.fetchJson(this.baseUrl);
    }

    async getBannerConnecting() {
        const data = await this.fetchJson(this.baseUrl);
        return data.vars.banner_connecting;
    }

    async getBannerDetail() {
        const data = await this.fetchJson(this.baseUrl);
        return data.vars.banner_detail;
    }

    async getServerDesc() {
        const data = await this.fetchJson(this.baseUrl);
        return data.vars.sv_projectDesc;
    }
}

module.exports = { Stats };
