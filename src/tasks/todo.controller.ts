import { Controller } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
}
