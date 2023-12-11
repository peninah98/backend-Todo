import { Injectable } from '@nestjs/common';
import { db } from 'src/main';

@Injectable()
export class CategoriesRepository {
  async getCategories() {
    return await db.getData('/tasks');
  }
}
