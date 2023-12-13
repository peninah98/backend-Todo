import { Module, forwardRef } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TasksRepository } from './tasks.repository';
import { CategoriesModule } from 'src/categories/categories.module';
import { Config, JsonDB } from 'node-json-db';

@Module({
  controllers: [TasksController],
  providers: [
    TasksService,
    TasksRepository,
    {
      provide: 'database',
      useValue: new JsonDB(new Config('myDataBase', true, true, '/')),
    },
  ],
  exports: [TasksRepository, TasksService],
  imports: [forwardRef(() => CategoriesModule)],
})
export class TasksModule {}
