import type { SPRINTS } from "@external-lab-monorepo/constants";
import type { TaskPriority } from "@external-lab-monorepo/types";

export interface IProps {
  sprint: SPRINTS;
  title: string;
  description: string;
  done: boolean;
  priority: TaskPriority;
  error: unknown;
  loading: boolean;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setPriority: (priority: TaskPriority) => void;
  onSwitchDonePress: () => void;
  onUpdateTaskPress: () => void;
  onDeleteTaskPress: () => void;
}
