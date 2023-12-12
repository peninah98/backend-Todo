import { CreateTasksDto } from './dto/create.tasks.dto';
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

  async createTasks(body: CreateTasksDto) {
    try {
      return await db.push('/tasks[]', { body }, true);
    } catch (error) {
      throw new InternalServerErrorException(
        "Something went wrong can't create tasks",
      );
    }
  }
}
