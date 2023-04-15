import { Injectable, Scope } from '@nestjs/common';

import { Client } from 'pg';

@Injectable()
export class DatabaseService {
  private client: Client;

  async onModuleInit() {
    this.client = new Client({
      host: 'localhost',
      port: 32768,
      user: 'postgres',
      password: 'postgrespw',
    });

    await this.client.connect();
  }

  async query(query: string, params: any[] = []): Promise<any> {
    return (await this.client.query(query, params)).rows;
  }
}
