import { ProviderAdapter } from "./config/adapters/provider.adapter";
import { PostgreSQLDatabase } from "./infraestructure/adapters/postgresql.impl";
import { config } from "./config/env.config";
import { Server } from "./presentation/server";
import { FlowAdapter } from "./config/adapters/flow.adapter";

(async () => {
    main()
})();

async function main() {
    ProviderAdapter.newProvider();
    PostgreSQLDatabase.createDatabase({
        host: config.POSTGRES_DB_HOST,
        user: config.POSTGRES_DB_USER,
        database: config.POSTGRES_DB_NAME,
        password: config.POSTGRES_DB_PASSWORD,
        port: config.POSTGRES_DB_PORT
    });

    const { discordFlow, registerFlow, welcomeFlow } = await import("./presentation/keywords");
    FlowAdapter.newFlow([discordFlow, welcomeFlow, registerFlow]);

    const server = new Server(FlowAdapter.getFlows(), ProviderAdapter.getProvider(), PostgreSQLDatabase.getDatabase());
    await server.connect();
}