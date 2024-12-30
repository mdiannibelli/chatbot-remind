import { DatabaseAdapter } from "~/config/adapters/db.adapter";
import { PostgreSQLAdapter as PostgresDatabase } from '@builderbot/database-postgres'

interface Options {
    host: string,
    user: string,
    database: string,
    password: string,
    port: number
}

export class PostgreSQLDatabase implements DatabaseAdapter {
    public client: PostgresDatabase
    constructor(private options: Options) {
        this.client = new PostgresDatabase(this.options)
    }

    connect(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    disconnect(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    insert(data: any): Promise<void> {
        throw new Error("Method not implemented.");
    }
    find(query: any): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
    update(id: string, data: any): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}