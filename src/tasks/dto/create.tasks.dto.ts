import { Status } from 'src/status';
export class CreateTasksDto {
  readonly title: string;
  readonly status: Status;
  readonly description: string;
  readonly categoryId: string;
}
