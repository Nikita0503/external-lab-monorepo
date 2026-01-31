import { IFile, INewFile } from '../../../interfaces/general';

export interface IProps {
  title: string;
  description: string;
  files: INewFile[];
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  onCreateTaskPress: () => void;
  onAddFile: (file: IFile | INewFile) => void;
  onDeleteFile: (file: IFile | INewFile) => void;
}
