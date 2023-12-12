import { Status } from 'src/status';
export class CreateTasksDto {
  readonly id: number;
  readonly title: string;
  readonly status: Status;
  readonly description: string;
}
