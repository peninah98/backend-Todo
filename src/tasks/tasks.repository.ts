import { CreateTasksDto } from './dto/create.tasks.dto';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { db } from 'src/main';
import { v4 as uuidv4 } from 'uuid';

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
      const id = uuidv4();
      const newTask = { id, ...body };
      await db.push('/tasks[]', newTask);
      return newTask;
    } catch (error) {
      throw new InternalServerErrorException(
        "Something went wrong, can't create tasks",
      );
    }
  }
}
