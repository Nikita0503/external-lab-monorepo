import { SPRINTS } from '@external-lab-monorepo/constants';
import { TaskPriority } from '@external-lab-monorepo/types';
import { IFile, INewFile } from '../../../interfaces/general';

export interface IProps {
  sprint: SPRINTS;
  title: string;
  description: string;
  done: boolean;
  files: (IFile | INewFile)[];
  priority: TaskPriority;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  onUpdateTaskPress: () => void;
  onAddFile: (file: INewFile) => void;
  onDeleteFile: (file: IFile | INewFile) => void;
  onSwitchDonePress: () => void;
  onDeleteTaskPress: () => void;
  setPriority: (priority: TaskPriority) => void;
}
