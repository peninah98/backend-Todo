import { Controller, Get } from '@nestjs/common';

@Controller()
export class TodoController {
  @Get('/tasks')
  getTasks(): string {
    return 'This is a list of tasks';
  }
}
