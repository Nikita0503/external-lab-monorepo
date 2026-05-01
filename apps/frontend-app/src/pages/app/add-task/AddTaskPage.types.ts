import type { SPRINTS } from "@external-lab-monorepo/constants";
import type { TaskPriority } from "@external-lab-monorepo/types";

export interface IProps {
  sprint: SPRINTS;
  title: string;
  description: string;
  priority: TaskPriority;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setPriority: (priority: TaskPriority) => void;
  onCreateTaskPress: () => void;
}
