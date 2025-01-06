import { FlowAdapter } from "./config/adapters/flow.adapter";
import { ProviderAdapter } from "./config/adapters/provider.adapter";
import { Server } from "./presentation/server";
import { PostgreSQLDatabase } from "./infraestructure/adapters/postgresql.impl";
import { config } from "./config/env.config";

(async () => {
    main()
})();

async function main() {
    const adapterFlow = FlowAdapter.newFlow([]);
    const adapterProvider = ProviderAdapter.newProvider();
    const adapterDB = new PostgreSQLDatabase.createDatabase({
        host: config.POSTGRES_DB_HOST,
        user: config.POSTGRES_DB_USER,
        database: config.POSTGRES_DB_NAME,
        password: config.POSTGRES_DB_PASSWORD,
        port: config.POSTGRES_DB_PORT
    });

    const server = new Server(adapterFlow, adapterProvider, adapterDB);
    await server.connect();
}