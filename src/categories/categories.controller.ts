import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoriesDto } from './categories.repository';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  getCategories() {
    return this.categoriesService.getAllCategories();
  }

  @Post()
  createCategories(@Body() body: CreateCategoriesDto) {
    return this.categoriesService.createCategories(body);
  }
}
