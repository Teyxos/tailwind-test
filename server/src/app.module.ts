import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { DatabaseService } from './database/database.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TodosModule, DatabaseModule, AuthModule],
  providers: [DatabaseService],
})
export class AppModule {}
