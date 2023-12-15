import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesRepository } from './categories.repository';
import { CategoriesService } from './categories.service';
import { Config, JsonDB } from 'node-json-db';

@Module({
  controllers: [CategoriesController],
  providers: [
    CategoriesService,
    CategoriesRepository,
    {
      provide: 'database',
      useValue: new JsonDB(new Config('myDataBase', true, true, '/')),
    },
  ],

  exports: [CategoriesService, CategoriesRepository],
})
export class CategoriesModule {}
