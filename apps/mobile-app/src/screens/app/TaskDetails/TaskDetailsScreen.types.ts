import { Task } from '@external-lab-monorepo/types';

export interface IProps {
  task: Task;
  deleteTask: (
    taskId: string,
    onSuccess?: () => void,
    onError?: (error: any) => void,
  ) => void;
}
