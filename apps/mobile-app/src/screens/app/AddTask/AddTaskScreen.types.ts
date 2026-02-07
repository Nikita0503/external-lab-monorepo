import { SPRINTS } from '@external-lab-monorepo/constants';
import { TaskPriority } from '@external-lab-monorepo/types';
import { IFile, INewFile } from '../../../interfaces/general';

export interface IProps {
  sprint: SPRINTS;
  title: string;
  description: string;
  files: INewFile[];
  priority: TaskPriority;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  onCreateTaskPress: () => void;
  onAddFile: (file: IFile | INewFile) => void;
  onDeleteFile: (file: IFile | INewFile) => void;
  setPriority: (priority: TaskPriority) => void;
}
