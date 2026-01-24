import { CommonTask } from '@external-lab-monorepo/types';

export interface IProps {
  allTasks: CommonTask[];
  error: any;
  loading: boolean;
  moreCommonTasksError: any;
  moreCommonTasksLoading: boolean;
  fetchCommonTasks: (
    onSuccess?: () => void,
    onError?: (error: any) => void,
  ) => void;
  fetchMoreCommonTasks: (
    onSuccess?: () => void,
    onError?: (error: any) => void,
  ) => void;
}
