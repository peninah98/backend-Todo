import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { CategoriesService } from '../categories/categories.service';
import { Status } from '../status';

describe('TasksController', () => {
  let controller: TasksController;
  let fakeTaskServices: Partial<TasksService>;
  let fakeCategoryService: Partial<CategoriesService>;

  beforeEach(async () => {
    fakeTaskServices = {
      getAllTasks: () => {
        return Promise.resolve([]);
      },
      createTasks: () => {
        return Promise.resolve({
          id: '1',
          description: 'hello there',
          status: Status.OPEN,
          title: 'Gteeting',
          categoryId: 'hel-jsj',
        });
      },
    };
    fakeCategoryService = {
      getAllCategories() {
        return Promise.resolve([{ id: 'Category', name: 'Penine' }]);
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [
        {
          provide: TasksService,
          useValue: fakeTaskServices,
        },
        {
          provide: CategoriesService,
          useValue: fakeCategoryService,
        },
      ],
    }).compile();

    controller = module.get<TasksController>(TasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('Should get all tasks', async () => {
    const allTasks = await controller.getTasks();
    expect(allTasks).toBeInstanceOf(Array);
  });
  it('Should create task', async () => {
    const newTask = await controller.createTasks({
      description: 'hello there',
      status: Status.OPEN,
      title: 'Gteeting',
    });
    expect(newTask).toBeDefined();
  });
});
