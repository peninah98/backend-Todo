import { Status } from './../status';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { JsonDB } from 'node-json-db';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksRepository {
  constructor(@Inject('database') private db: JsonDB) {
    if (!this.db.exists('/tasks')) {
      this.db.push('/tasks', []);
    }
  }
  async getTasks() {
    try {
      return await this.db.getData('/tasks');
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong');
    }
  }

  async createTasks(task) {
    try {
      const id = uuidv4();
      const newTask = {
        id,
        Status: Status.OPEN,
        ...task,
        categoryId: task.categoryId,
      };
      await this.db.push('/tasks[]', newTask, true);
      return newTask;
    } catch (error) {
      throw new InternalServerErrorException(
        "Something went wrong, can't create tasks",
      );
    }
  }

  async getTaskById(id: string) {
    try {
      const tasks = await this.db.find('/tasks', (task) => task.id === id);
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
      const tasks = await this.db.getIndex('/tasks', id, 'id');
      if (tasks < 0)
        throw new InternalServerErrorException(
          'You aare deleting empty database',
        );
      return this.db.delete(`/tasks[${tasks}]`);
    } catch (error) {
      throw new InternalServerErrorException('Delete failed');
    }
  }
}
