import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { CreateTasksDto } from './dto/create.tasks.dto';

@Injectable()
export class TasksService {
  constructor(private taskRepository: TasksRepository) {}

  getAllTasks() {
    return this.taskRepository.getTasks();
  }

  createTasks(body: CreateTasksDto) {
    return this.taskRepository.createTasks(body);
  }

  getTaskById(id: string) {
    return this.taskRepository.getTaskById(id);
  }

  deleteTask(id: string) {
    return this.taskRepository.deleteTaskById(id);
  }
}
