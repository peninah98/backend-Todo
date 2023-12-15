import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

describe('CategoriesController', () => {
  let controller: CategoriesController;
  let fakeCartegoryServices: Partial<CategoriesService>;
  beforeEach(async () => {
    fakeCartegoryServices = {
      createCategories: () => {
        return Promise.resolve({
          id: '1234567890',
          name: 'test category',
        });
      },
      getAllCategories: () => {
        return Promise.resolve([]);
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesController],
      providers: [
        { provide: CategoriesService, useValue: fakeCartegoryServices },
      ],
    }).compile();

    controller = module.get<CategoriesController>(CategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('Should create category', async () => {
    const newCategory = controller.createCategories({
      name: 'test category',
    });
    expect(newCategory).toBeDefined();
  });
  it('Should get all categories', async () => {
    const allCategories = await controller.getCategories();
    expect(allCategories).toBeInstanceOf(Array);
  });
});
