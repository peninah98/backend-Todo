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
}
