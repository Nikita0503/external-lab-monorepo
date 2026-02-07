import { IFile, INewFile } from '../../../interfaces/general';

export interface IProps {
  files: (IFile | INewFile)[];
  onDeleteFile?: (file: IFile | INewFile) => void;
  onAddFile?: (file: INewFile) => void;
}

export interface IAddFileListHeaderProps {
  onAddFile: NonNullable<IProps['onAddFile']>;
}
