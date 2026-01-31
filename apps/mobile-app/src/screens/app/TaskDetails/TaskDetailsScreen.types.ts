import { Task } from '@external-lab-monorepo/types';

export interface IProps {
  task: Task;
  goToTasks: () => void;
  goToEditTask: () => void;
  onDeleteTaskPress: () => void;
}
