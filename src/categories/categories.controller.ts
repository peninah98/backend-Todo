import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoriesDto } from './dto/create.categories.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  async getCategories() {
    return await this.categoriesService.getAllCategories();
  }

  @Post()
  createCategories(@Body() body: CreateCategoriesDto) {
    return this.categoriesService.createCategories(body);
  }
}
