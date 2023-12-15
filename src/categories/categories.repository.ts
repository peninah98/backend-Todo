import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CategoryEntity } from './entity/categories.entity';
import { JsonDB } from 'node-json-db';

@Injectable()
export class CategoriesRepository {
  constructor(@Inject('database') private db: JsonDB) {
    if (!this.db.exists('/tasks')) {
      this.db.push('/tasks', []);
    }
  }
  async getCategories() {
    try {
      return await this.db.getData('/categories');
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong !');
    }
  }
  async createCategories(body: CategoryEntity) {
    try {
      const newCategory = { id: uuidv4(), ...body };
      await this.db.push('/categories[]', newCategory);
      return newCategory;
    } catch (error) {
      throw new InternalServerErrorException(
        'Something went wrong cant post categories',
      );
    }
  }
}
