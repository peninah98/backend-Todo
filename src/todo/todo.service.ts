import { Tasks } from 'src/tasks/tasks.interface';
import { Injectable } from '@nestjs/common';
import { dummyTasks } from 'src/tasks/dummyTasks';

@Injectable()
export class TodoService {
  private readonly tasks: Tasks[] = dummyTasks;

  getAllUsers(): Tasks[] {
    return this.tasks;
  }
  createTask(): Tasks[] {
    return this.dummyTasks.push(Tasks);
  }
}
