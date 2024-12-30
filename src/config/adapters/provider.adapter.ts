import { createProvider } from "@builderbot/bot";

export class ProviderAdapter {
    static newProvider(Provider: any) {
        return createProvider(Provider);
    }
}