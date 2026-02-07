import { SPRINTS } from '@external-lab-monorepo/constants';
import { Task } from '@external-lab-monorepo/types';

export interface IProps {
  sprint: SPRINTS;
  task: Task;
  goToTasks: () => void;
  goToEditTask: () => void;
  onDeleteTaskPress: () => void;
}
