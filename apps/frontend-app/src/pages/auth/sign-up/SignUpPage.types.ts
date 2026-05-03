import type { SPRINTS } from "@external-lab-monorepo/constants";

export interface IProps {
  sprint: SPRINTS;
  email: string;
  name: string;
  password: string;
  repeatPassword: string;
  passwordVisible: boolean;
  avatarPreview: string | null;
  setEmail: (email: string) => void;
  setName: (name: string) => void;
  setPassword: (password: string) => void;
  setRepeatPassword: (repeatPassword: string) => void;
  togglePasswordVisibility: () => void;
  onAvatarChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAvatarDelete: () => void;
  onSignUpPress: () => void;
  goToSignIn: () => void;
}
