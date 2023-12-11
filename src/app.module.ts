import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './tasks/todo.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [TodoModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
