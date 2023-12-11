import { Tasks } from './tasks.interface';

export const dummyTasks: Tasks[] = [
  {
    id: crypto.randomUUID(),
    title: 'Hello there!',
    descrition: 'I would like to join you there, Cant wait so Vegas',
  },
  {
    id: crypto.randomUUID(),
    title: 'Hello here!',
    descrition: 'I would like to join you there, Cant wait so Vegas',
  },
  {
    id: crypto.randomUUID(),
    title: 'Hello moon!',
    descrition: 'I would like to join you there, Cant wait so Vegas',
  },
];
