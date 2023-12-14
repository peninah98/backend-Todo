import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import { CategoriesRepository } from './categories.repository';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let fakeCategoryRepository: Partial<CategoriesRepository>;

  beforeEach(async () => {
    fakeCategoryRepository = {
      createCategories: () => {
        return Promise.resolve({
          id: 'b45f65e9-89c9-43c2-83d9-a27274c15247',
          name: 'jajadf',
        });
      },
      getCategories: () => {
        return Promise.resolve();
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        {
          provide: CategoriesRepository,
          useValue: fakeCategoryRepository,
        },
      ],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('Should retun the array of iteme', async () => {
    const result = await service.createCategories({
      id: 'b45f65e9-89c9-43c2-83d9-a27274c15247',
      name: 'jajadf',
    });
    expect(result).toBeDefined();
  });
  it('Should return the array of the elements', async () => {
    const category = await service.getAllCategories();
    expect(category).toBeUndefined();
  });
});
