import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import TodoDto from 'src/dto/TodoDto';

@Injectable()
export class TodosService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getAllTodos(): Promise<ToDo[]> {
    return new Promise<ToDo[]>(async (resolve, reject) => {
      let todos = [];

      await this.databaseService
        .query('SELECT * FROM todos')
        .then((res) => {
          todos = res;
        })
        .catch((err) => {
          reject(err);
        });

      resolve(todos);
    });
  }

  async createTodo(dto: TodoDto): Promise<ToDo> {
    return await this.databaseService.query(
      'INSERT INTO todos (name, description) VALUES ($1, $2);',
      [dto.title, dto.description],
    );
  }

  deleteTodoById(id: number): string {
    this.databaseService.query('DELETE FROM todos WHERE id = $1;', [id]);

    return 'Ok!';
  }
}

type ToDo = {
  id: number;
  title: string;
  description: string;
};
