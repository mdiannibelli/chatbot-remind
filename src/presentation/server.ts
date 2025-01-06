import { createBot } from "@builderbot/bot";
import { FlowAdapter } from "~/config/adapters/flow.adapter";
import { ProviderAdapter } from "~/config/adapters/provider.adapter";
import { config } from "~/config/env.config";
import { PostgreSQLDatabase } from "~/infraestructure/adapters/postgresql.impl";


export class Server {
    constructor(
        private readonly adapterFlow = FlowAdapter.getFlows(),
        private readonly adapterProvider = ProviderAdapter.getProvider(),
        private readonly adapterDB = PostgreSQLDatabase.getDatabase(),
    ) { }

    async connect() {
        const { handleCtx, httpServer } = await createBot({
            flow: this.adapterFlow,
            provider: this.adapterProvider,
            database: this.adapterDB
        })

        console.log(`Bot created>>>>>`);
        //TODO this.adapterProvider.server.post
        //this.adapterProvider.server.post

        httpServer(config.PORT);
    }
}