import { Task } from '@external-lab-monorepo/types';

export interface IProps {
  tasks: Task[];
  error: any;
  loading: boolean;
  fetchTasks: () => void;
}
