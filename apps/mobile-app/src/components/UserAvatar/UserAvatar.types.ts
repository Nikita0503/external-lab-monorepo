import { INewFile } from '../../interfaces/general';

export interface IProps {
  avatar: INewFile | string | undefined | null;
  setAvatar: (avatar: INewFile | undefined) => void;
}
