import { INewFile } from '../../../interfaces/general';

export interface IProps {
  email: string;
  password: string;
  name: string;
  repeatPassword: string;
  avatar: INewFile | undefined;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setName: (name: string) => void;
  setRepeatPassword: (repeatPassword: string) => void;
  setAvatar: (avatar: INewFile | undefined) => void;
  onSignUpPress: () => void;
  goToSignIn: () => void;
}
