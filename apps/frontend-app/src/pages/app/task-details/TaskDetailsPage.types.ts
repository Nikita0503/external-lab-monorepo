import type { SPRINTS } from "@external-lab-monorepo/constants";
import type { Task } from "@external-lab-monorepo/types";

export interface IProps {
  sprint: SPRINTS;
  task: Task | undefined;
  error: unknown;
  loading: boolean;
  goToTasks: () => void;
  goToEditTask: () => void;
  onDeleteTaskPress: () => void;
}
