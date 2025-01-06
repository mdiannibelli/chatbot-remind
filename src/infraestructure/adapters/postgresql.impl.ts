import { DatabaseAdapter } from "~/config/adapters/db.adapter";
import { PostgreSQLAdapter as Database } from '@builderbot/database-postgres'

interface Options {
    host: string,
    user: string,
    database: string,
    password: string,
    port: number
}

export class PostgreSQLDatabase implements DatabaseAdapter {
    static client: Database

    static createDatabase(options: Options): void {
        if (!this.client) {
            this.client = new Database(options);
        } else {
            throw new Error('Database already initialized.');
        }
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

    static getDatabase(): Database {
        if (!this.client) {
            throw new Error("Database not initialized. Call createDatabase first.");
        }
        return this.client;
    }
}