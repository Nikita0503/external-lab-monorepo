import { IFile, INewFile } from '../../../interfaces/general';

export interface IProps {
  title: string;
  description: string;
  done: boolean;
  files: (IFile | INewFile)[];
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  onUpdateTaskPress: () => void;
  onAddFile: (file: INewFile) => void;
  onDeleteFile: (file: IFile | INewFile) => void;
  onSwitchDonePress: () => void;
  onDeleteTaskPress: () => void;
}
