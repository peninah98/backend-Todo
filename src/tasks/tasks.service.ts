import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(private taskRepositiory: TasksRepository) {}
  getAllTasks() {
    return this.taskRepositiory.getTasks();
  }
}
