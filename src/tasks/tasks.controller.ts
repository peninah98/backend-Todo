import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
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
  createTasks(@Body(new ValidationPipe()) body: CreateTasksDto) {
    return this.taskServices.createTasks(body);
  }

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    return this.taskServices.getTaskById(id);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskServices.deleteTask(id);
  }
}
