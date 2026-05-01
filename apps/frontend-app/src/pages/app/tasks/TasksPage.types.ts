import type { Task } from "@external-lab-monorepo/types";

export interface IProps {
  tasks: Task[];
  error: unknown;
  loading: boolean;
  fetchTasks: () => void;
  goToTaskDetails: (task: Task) => void;
  goToEditTask: (task: Task) => void;
  goToAddTask: () => void;
  onDeleteTaskPress: (task: Task) => void;
  onSwitchDonePress: (task: Task) => void;
}
