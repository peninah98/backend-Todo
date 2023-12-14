import { Injectable, NotFoundException } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { CreateTasksDto } from './dto/create.tasks.dto';
import { CategoriesService } from '../categories/categories.service';

@Injectable()
export class TasksService {
  constructor(
    private taskRepository: TasksRepository,
    private categoriesService: CategoriesService,
  ) {}

  async createTasks(body: CreateTasksDto) {
    const categories = await this.categoriesService.getAllCategories();
    if (categories.length === 0) {
      throw new NotFoundException('No category found');
    }
    const categoryId = categories.slice(-1)[0].generateId;
    const newBody = { ...body, categoryId };
    return this.taskRepository.createTasks(newBody);
  }

  getAllTasks() {
    return this.taskRepository.getTasks();
  }

  getTaskById(id: string) {
    return this.taskRepository.getTaskById(id);
  }

  deleteTask(id: string) {
    return this.taskRepository.deleteTaskById(id);
  }
}
