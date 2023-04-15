import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  InternalServerErrorException,
  Param,
  Post,
} from '@nestjs/common';
import { TodosService } from './todos.service';

import TodoDto from 'src/dto/TodoDto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async getAll(): Promise<object[]> {
    return await this.todosService.getAllTodos();
  }

  @Post('create-todo')
  async createTodo(
    @Body() dto: TodoDto,
  ): Promise<TodoDto | InternalServerErrorException> {
    let data: TodoDto;

    try {
      data = await this.todosService.createTodo(dto);
    } catch (err) {
      return new InternalServerErrorException(err.message);
    }

    return data;
  }

  @Delete('delete-todo/:id')
  deleteTodoById(@Param() params): HttpStatus {
    try {
      this.todosService.deleteTodoById(params.id);
    } catch (err) {
      return HttpStatus.INTERNAL_SERVER_ERROR;
    }

    return HttpStatus.OK;
  }
}
