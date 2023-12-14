import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';

@Injectable()
export class CategoriesService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  getAllCategories() {
    return this.categoriesRepository.getCategories();
  }
  createCategories(body) {
    return this.categoriesRepository.createCategories(body);
  }
}
