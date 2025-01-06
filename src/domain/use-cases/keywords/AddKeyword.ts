import { addKeyword } from "@builderbot/bot";
import { ActionPropertiesKeyword, CallbackFunction, TFlow } from "@builderbot/bot/dist/types";
import { PostgreSQLAdapter } from "@builderbot/database-postgres";
import { BaileysProvider } from "@builderbot/provider-baileys";
import { ProviderAdapter } from "~/config/adapters/provider.adapter";
import { PostgreSQLDatabase } from "~/infraestructure/adapters/postgresql.impl";

interface KeywordOptions {
    keyword: string | [string, ...string[]],
    answers?: {
        message: string | string[];
        options?: ActionPropertiesKeyword;
        callback?: CallbackFunction<BaileysProvider, PostgreSQLAdapter>;
        nestedFlows?: TFlow<BaileysProvider, PostgreSQLAdapter> | TFlow<BaileysProvider, PostgreSQLAdapter>[];
    }[];
    action?: {
        callback: CallbackFunction<BaileysProvider, PostgreSQLAdapter>;
    };
}

export class AddKeyword {
    constructor(
        private readonly Provider = ProviderAdapter.getProvider(),
        private readonly Database = PostgreSQLDatabase.getDatabase()
    ) { }

    public createKeyword(options: KeywordOptions) {
        const { keyword = '', answers = [], action } = options;
        if (!keyword) throw Error("Missing keyword");

        let flow = addKeyword<typeof this.Provider, typeof this.Database>(keyword);

        answers.forEach(({ message, options, callback, nestedFlows }) => {
            flow = flow.addAnswer(message, options, callback, nestedFlows);
        })

        if (action) {
            flow = flow.addAction(action.callback);
        }

        return flow;
    }
}