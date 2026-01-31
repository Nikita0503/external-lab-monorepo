import { Task } from '@external-lab-monorepo/types';

export interface IProps {
  tasks: Task[];
  error: any;
  loading: boolean;
  fetchTasks: (onSuccess?: () => void, onError?: (error: any) => void) => void;
  goToTaskDetails: (task: Task) => void;
  goToEditTask: (task: Task) => void;
  onDeleteTaskPress: (task: Task) => void;
  onSwitchDonePress: (task: Task) => void;
}
