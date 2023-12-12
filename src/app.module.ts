import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [CategoriesModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
