import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { CreateTasksDto } from './dto/create.tasks.dto';

@Injectable()
export class TasksService {
  constructor(private taskRepositiory: TasksRepository) {}
  getAllTasks() {
    return this.taskRepositiory.getTasks();
  }
  createTasks(body: CreateTasksDto) {
    return this.taskRepositiory.createTasks(body);
  }
}
