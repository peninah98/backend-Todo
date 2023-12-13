import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { TasksRepository } from './tasks.repository';
import { CreateTasksDto } from './dto/create.tasks.dto';
import { Status } from '../status';
import { forwardRef } from '@nestjs/common';
describe('TasksService', () => {
  let service: TasksService;
  let fakeTaskRepository: Partial<TasksRepository>;

  beforeEach(async () => {
    fakeTaskRepository = {
      createTasks: () => {
        return Promise.resolve({
          id: 'w',
          title: 'Test task',
          description: 'Test desc',
          categoryId: 'hah',
          status: Status.OPEN,
        } as CreateTasksDto);
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      imports: [forwardRef(() => TasksRepository)],
      providers: [
        TasksService,
        {
          provide: TasksRepository,
          useValue: fakeTaskRepository,
        },
      ],
    }).compile();

    service = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
