import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoriesDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
