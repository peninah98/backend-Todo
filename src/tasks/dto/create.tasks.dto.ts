import { Status } from 'src/status';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTasksDto {
  @ApiProperty({
    example: 'Hello there!',
    required: true,
  })
  @IsString()
  @IsNotEmpty({ message: 'Title is required' })
  readonly title: string;

  @ApiProperty({
    example: 'DONE',
    required: true,
  })
  readonly status: Status;

  @ApiProperty({
    example:
      'I would like to join you, in the upcoming event of Life on the moon',
    required: true,
  })
  @IsString()
  @IsNotEmpty({ message: 'Title is required' })
  readonly description: string;
}
