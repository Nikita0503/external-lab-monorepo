import { Task } from '@external-lab-monorepo/types';

export interface IProps {
  task: Task;
  error: any;
  loading: boolean;
  updateTask: (
    taskId: string,
    title: string,
    description: string,
    done: boolean,
    files: any[],
    oldFiles: any[],
    onSuccess?: () => void,
    onError?: (error: any) => void,
  ) => void;
}
