import { Injectable } from '@nestjs/common';
import { db } from 'src/main';

@Injectable()
export class TasksRepository {
  async getTasks() {
    return await db.getData('/tasks');
  }
}
