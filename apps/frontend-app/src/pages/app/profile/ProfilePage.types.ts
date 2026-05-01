import type { SPRINTS } from "@external-lab-monorepo/constants";
import type { User } from "@external-lab-monorepo/types";

export interface IProps {
  sprint: SPRINTS;
  currentUser?: User;
  error: unknown;
  loading: boolean;
  email: string;
  name: string;
  setName: (name: string) => void;
  fetchCurrentUser: () => void;
  onUpdateCurrentUserPress: () => void;
  onLogoutPress: () => void;
}
