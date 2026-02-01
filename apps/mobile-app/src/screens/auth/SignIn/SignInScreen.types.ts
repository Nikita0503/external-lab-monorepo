import { PasswordDisplayMode } from '../../../constants/general';

export interface IProps {
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
