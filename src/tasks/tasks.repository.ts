import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { db } from 'src/main';

@Injectable()
export class TasksRepository {
  async getTasks() {
    try {
      return await db.getData('/tasks');
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong');
    }
  }
}
