import { INewFile } from '../../../interfaces/general';

export interface IProps {
  onAddFile: (file: INewFile) => void;
}
