import { IFile, INewFile } from '../../../interfaces/general';

export interface IProps {
  file: IFile | INewFile;
  onDeleteFile?: (file: IFile | INewFile) => void;
}
