import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { db } from 'src/main';

@Injectable()
export class TasksCategories {
  async getAllTasks() {
    try {
      return await db.getData('/tasks');
    } catch (error) {
      throw new InternalServerErrorException(
        'Something went wrong int task database',
      );
    }
  }
}
