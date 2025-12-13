import { User } from "@external-lab-monorepo/types";

export interface ISetCurrentUserAction {
  currentUser: User;
}

export interface ISetError {
  error: any;
}

export interface ISetLoadingAction {
  loading: boolean;
}

export interface IFetchCurrentUserAsyncAction {
  onSuccess?: () => void;
  onError?: (error: any) => void;
}

export interface IUpdateCurrentUserAsyncAction {
  name: string;
  avatar: any;
  onSuccess?: () => void;
  onError?: (error: any) => void;
}
