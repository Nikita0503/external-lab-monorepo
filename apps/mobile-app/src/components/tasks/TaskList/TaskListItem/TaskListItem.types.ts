import { Task } from '@external-lab-monorepo/types';

export interface IProps {
  task: Task;
  goToTaskDetails: (task: Task) => void;
  goToEditTask: (task: Task) => void;
  onDeleteTaskPress: (task: Task) => void;
  onSwitchDonePress: (task: Task) => void;
}
