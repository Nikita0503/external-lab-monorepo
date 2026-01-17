import { Task } from '@external-lab-monorepo/types';

export interface IProps {
  task: Task;
  error: any;
  loading: boolean;
  fetchTaskData: (
    onSuccess: () => void,
    onError?: (error: any) => void,
  ) => void;
}
