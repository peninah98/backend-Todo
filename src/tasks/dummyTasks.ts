import { Tasks } from './tasks.interface';

export const dummyTasks: Tasks[] = [
  { id: crypto.randomUUID(), task: 'Hello there!' },
  { id: crypto.randomUUID(), task: 'Hello here!' },
  { id: crypto.randomUUID(), task: 'Hello moon!' },
];

