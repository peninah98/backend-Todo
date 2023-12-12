import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTasksDto } from './dto/create.tasks.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskServices: TasksService) {}
  @Get()
  getTasks() {
    return this.taskServices.getAllTasks();
  }

  @Post()
  createTasks(@Body() body: CreateTasksDto) {
    return this.taskServices.createTasks(body);
  }
}
