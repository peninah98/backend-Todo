import { CreateCategoriesDto } from './dto/create.categories.dto';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { db } from 'src/main';

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
      return await db.push('/categories[]', { body }, true);
    } catch (error) {
      throw new InternalServerErrorException(
        'Something went wrong cant post categories',
      );
    }
  }
}
export { CreateCategoriesDto };
