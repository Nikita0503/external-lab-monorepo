import type { SPRINTS } from "@external-lab-monorepo/constants";
import type { TaskPriority } from "@external-lab-monorepo/types";

interface IExistingFile {
  id: number;
  image: string;
}

export interface IProps {
  sprint: SPRINTS;
  title: string;
  description: string;
  done: boolean;
  priority: TaskPriority;
  error: unknown;
  loading: boolean;
  existingFiles: IExistingFile[];
  newFiles: File[];
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setPriority: (priority: TaskPriority) => void;
  onSwitchDonePress: () => void;
  onUpdateTaskPress: () => void;
  onDeleteTaskPress: () => void;
  onAddFile: (file: File) => void;
  onDeleteExistingFile: (file: IExistingFile) => void;
  onDeleteNewFile: (file: File) => void;
}
