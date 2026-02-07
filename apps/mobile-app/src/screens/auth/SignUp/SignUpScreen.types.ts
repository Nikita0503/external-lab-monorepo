import { SPRINTS } from '@external-lab-monorepo/constants';
import { PasswordDisplayMode } from '../../../constants/general';
import { INewFile } from '../../../interfaces/general';

export interface IProps {
  sprint: SPRINTS;
  email: string;
  password: string;
  name: string;
  repeatPassword: string;
  avatar: INewFile | undefined;
  passwordDisplayMode: PasswordDisplayMode;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setName: (name: string) => void;
  setRepeatPassword: (repeatPassword: string) => void;
  setAvatar: (avatar: INewFile | undefined) => void;
  togglePasswordDisplayMode: () => void;
  onSignUpPress: () => void;
  goToSignIn: () => void;
}
