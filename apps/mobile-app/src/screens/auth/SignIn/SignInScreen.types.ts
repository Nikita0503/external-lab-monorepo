import { SPRINTS } from '@external-lab-monorepo/constants';
import { PasswordDisplayMode } from '../../../constants/general';

export interface IProps {
  sprint: SPRINTS;
  email: string;
  password: string;
  passwordDisplayMode: PasswordDisplayMode;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  togglePasswordDisplayMode: () => void;
  onLoginPress: () => void;
  goToSignUp: () => void;
  showDevMenu: () => void;
}
