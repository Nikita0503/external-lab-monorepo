import { User } from '@external-lab-monorepo/types';

export interface IProps {
  currentUser?: User;
  error: any;
  loading: boolean;
  fetchCurrentUser: (
    onSuccess?: () => void,
    onError?: (error: any) => void,
  ) => void;
  updateCurrentUser: (
    name: string,
    avatar: any,
    onSuccess?: () => void,
    onError?: (error: any) => void,
  ) => void;
}
