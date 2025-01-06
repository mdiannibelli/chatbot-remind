import { createProvider } from "@builderbot/bot";
import { BaileysProvider as Provider } from "@builderbot/provider-baileys";

export class ProviderAdapter {
    static provider: Provider
    static newProvider() {
        this.provider = createProvider(Provider);
    }

    static getProvider(): Provider {
        if (!this.provider) {
            throw new Error("Provider not initialized. Call newProvider first.");
        }
        return this.provider;
    }
}