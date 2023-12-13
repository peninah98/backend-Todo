import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTasksDto } from './dto/create.tasks.dto';
import { CategoriesService } from 'src/categories/categories.service';

@Controller('tasks')
export class TasksController {
  constructor(
    private taskServices: TasksService,
    private categoriesService: CategoriesService,
  ) {}
  @Get()
  getTasks() {
    return this.taskServices.getAllTasks();
  }

  @Post()
  async createTasks(@Body(new ValidationPipe()) body: CreateTasksDto) {
    const categories = await this.categoriesService.getAllCategories();
    console.log(categories);
    if (categories.length === 0) {
      throw new NotFoundException('No category foound');
    }
    const categoryId = categories.slice(-1)[0].generateId;
    const newBody = { ...body, categoryId };
    return this.taskServices.createTasks(newBody);
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
