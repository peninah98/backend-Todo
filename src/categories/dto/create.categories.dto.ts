import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoriesDto {
  @ApiProperty({
    example: 'Science',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
