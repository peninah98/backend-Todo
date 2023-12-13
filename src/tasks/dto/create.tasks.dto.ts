import { Status } from 'src/status';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTasksDto {
  @IsString()
  @IsNotEmpty({ message: 'Title is required' })
  readonly title: string;

  readonly status: Status;

  @IsString()
  @IsNotEmpty({ message: 'Title is required' })
  readonly description: string;
}
