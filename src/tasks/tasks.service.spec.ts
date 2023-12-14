import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { TasksRepository } from './tasks.repository';
import { CreateTasksDto } from './dto/create.tasks.dto';
import { Status } from '../status';
describe('TasksService', () => {
  let service: TasksService;
  let fakeTaskRepository: Partial<TasksRepository>;

  beforeEach(async () => {
    fakeTaskRepository = {
      getTasks: () => {
        return Promise.resolve();
      },
      createTasks: () => {
        return Promise.resolve({
          id: 'w',
          title: 'Test task',
          description: 'Test desc',
          categoryId: 'hah',
          status: Status.OPEN,
        } as CreateTasksDto);
      },
      getTaskById: () => {
        return Promise.resolve();
      },
      deleteTaskById: () => {
        return Promise.resolve();
      },
    };
    const module: TestingModule = await Test.createTestingModule({
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
  it('Should return all files', async () => {
    const tasks = await service.getAllTasks();
    expect(tasks).toBeUndefined();
  });
  it('Should delete tasks', async () => {
    const deleteTask = await service.deleteTask(
      'b45f65e9-89c9-43c2-83d9-a27274c15247',
    );
    expect(deleteTask).toBeUndefined();
  });
  it('Should retrive task by id', async () => {
    const retriveTask = await service.getTaskById(
      'b45f65e9-89c9-43c2-83d9-a27274c15247',
    );
    expect(retriveTask).toBeUndefined();
  });
});
