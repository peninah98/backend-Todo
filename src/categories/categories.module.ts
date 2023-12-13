import { Module, forwardRef } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesRepository } from './categories.repository';
import { CategoriesService } from './categories.service';
import { TasksModule } from 'src/tasks/tasks.module';
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
  imports: [forwardRef(() => TasksModule)],
})
export class CategoriesModule {}
