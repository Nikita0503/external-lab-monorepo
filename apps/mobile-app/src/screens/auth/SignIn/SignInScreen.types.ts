export interface IProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  onLoginPress: () => void;
  goToSignUp: () => void;
  showDevMenu: () => void;
}
