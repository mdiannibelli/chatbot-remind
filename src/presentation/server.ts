import { createBot } from "@builderbot/bot";
import { config } from "~/config/env.config";


export class Server {
    constructor(
        private readonly adapterFlow: any,
        private readonly adapterProvider: any,
        private readonly adapterDB: any,
    ) { }

    async connect() {
        const { handleCtx, httpServer } = await createBot({
            flow: this.adapterFlow,
            provider: this.adapterProvider,
            database: this.adapterDB
        })

        httpServer(config.PORT);
    }
}