import type { SPRINTS } from "@external-lab-monorepo/constants";

export interface IProps {
  sprint: SPRINTS;
  email: string;
  password: string;
  passwordVisible: boolean;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  togglePasswordVisibility: () => void;
  onLoginPress: () => void;
  goToSignUp: () => void;
  showDevMenu: () => void;
}
