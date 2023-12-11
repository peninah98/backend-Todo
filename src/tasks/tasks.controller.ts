import { Controller } from '@nestjs/common';
import { TodoService } from './tasks.service';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
}
