import { User } from "@external-lab-monorepo/types";

export interface ICurrentUserReducerState {
  currentUser: User | undefined;
  error: any;
  loading: boolean;
}
