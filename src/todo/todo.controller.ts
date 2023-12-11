import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller()
export class TodoController {
  @Get('/tasks')
  getAllTasks(): string {
    return 'This is a list of tasks';
  }

  @Get('/tasks/:id')
  getOneTask(@Param('id') id: string) {
    return `${id}`;
  }
  @Post()
  createTask(@Body() body: string) {
    return `I am the ${body}`;
  }
}
