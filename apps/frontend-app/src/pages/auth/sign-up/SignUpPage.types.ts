import type { SPRINTS } from "@external-lab-monorepo/constants";

export interface IProps {
  sprint: SPRINTS;
  email: string;
  name: string;
  password: string;
  repeatPassword: string;
  passwordVisible: boolean;
  setEmail: (email: string) => void;
  setName: (name: string) => void;
  setPassword: (password: string) => void;
  setRepeatPassword: (repeatPassword: string) => void;
  togglePasswordVisibility: () => void;
  onSignUpPress: () => void;
  goToSignIn: () => void;
}
