import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AuthService {
  constructor(private readonly databaseService: DatabaseService) {}

  async signup(username: string, password: string) {
    const user = await this.databaseService.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
      [username, password],
    );
    return user;
  }

  async login(username: string, password: string) {
    const user = await this.databaseService.query(
      'SELECT * FROM users WHERE username = $1 AND password = $2',
      [username, password],
    );
    return user;
  }
}
