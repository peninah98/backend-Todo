import { Status } from './../status';
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { db } from '../main';
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

  async createTasks(body) {
    try {
      const id = uuidv4();
      const newTask = {
        id,
        Status: body.status ? body.status : Status.OPEN,
        ...body,
      };
      await db.push('/tasks[]', newTask, true);
      return newTask;
    } catch (error) {
      throw new InternalServerErrorException(
        "Something went wrong, can't create tasks",
      );
    }
  }

  async getTaskById(id: string) {
    try {
      const tasks = await db.find('/tasks', (task) => task.id === id);
      if (!tasks) {
        throw new NotFoundException('Task not found');
      }

      return tasks;
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong');
    }
  }

  async deleteTaskById(id: string) {
    try {
      const tasks = await db.getIndex('/tasks', id, 'id');
      if (tasks < 0)
        throw new InternalServerErrorException(
          'You aare deleting empty database',
        );
      return db.delete(`/tasks[${tasks}]`);
    } catch (error) {
      throw new InternalServerErrorException('Delete failed');
    }
  }
}
