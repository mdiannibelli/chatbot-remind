export interface DatabaseAdapter {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    insert(data: any): Promise<void>;
    find(query: any): Promise<any[]>;
    update(id: string, data: any): Promise<void>;
    delete(id: string): Promise<void>;
}