import { TaskPriority } from '@external-lab-monorepo/types';

export interface IProps {
  priority: TaskPriority;
  selectPriority: (priority: TaskPriority) => void;
}
