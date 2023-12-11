import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Tasks } from '../tasks/tasks.interface';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('tasks')
  getAllUsers(): Tasks[] {
    return this.todoService.getAllUsers();
  }
}
