import { Task } from '@external-lab-monorepo/types';

export interface IProps {
  task: Task;
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
  deleteTask: (
    taskId: string,
    onSuccess?: () => void,
    onError?: (error: any) => void,
  ) => void;
}
