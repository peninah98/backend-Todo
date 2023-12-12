import { CreateCategoriesDto } from './dto/create.categories.dto';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { db } from 'src/main';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CategoriesRepository {
  async getCategories() {
    try {
      return await db.getData('/categories');
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong !');
    }
  }
  async createCategories(body: CreateCategoriesDto) {
    try {
      const generateId = uuidv4();
      const newCategory = { generateId, ...body };
      await db.push('/categories[]', newCategory);
      return newCategory;
    } catch (error) {
      throw new InternalServerErrorException(
        'Something went wrong cant post categories',
      );
    }
  }
}
export { CreateCategoriesDto };
