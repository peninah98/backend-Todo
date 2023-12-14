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
import { CategoriesService } from '../categories/categories.service';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('tasks')
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
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({
    type: CreateTasksDto,
    description: 'Task structure',
  })
  async createTasks(@Body(new ValidationPipe()) body: CreateTasksDto) {
    const categories = await this.categoriesService.getAllCategories();
    if (categories.length === 0) {
      throw new NotFoundException('No category foound');
    }
    const categoryId = categories.slice(-1)[0].generateId;
    const newBody = { ...body, categoryId };
    return this.taskServices.createTasks(newBody);
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Task retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  @ApiParam({ name: 'id', description: 'ID of the task to retrive' })
  getTaskById(@Param('id') id: string) {
    return this.taskServices.getTaskById(id);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Task deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  @ApiParam({ name: 'id', description: 'ID of the task to delete' })
  deleteTask(@Param('id') id: string) {
    return this.taskServices.deleteTask(id);
  }
}
