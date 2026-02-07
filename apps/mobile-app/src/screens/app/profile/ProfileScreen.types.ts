import { SPRINTS } from '@external-lab-monorepo/constants';
import { User } from '@external-lab-monorepo/types';

export interface IProps {
  sprint: SPRINTS;
  currentUser?: User;
  error: any;
  loading: boolean;
  email: string;
  name: string;
  avatar: any;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setAvatar: React.Dispatch<React.SetStateAction<any>>;
  fetchCurrentUser: (
    onSuccess?: () => void,
    onError?: (error: any) => void,
  ) => void;
  onUpdateCurrentUserPress: () => void;
  onLogoutPress: () => void;
}
