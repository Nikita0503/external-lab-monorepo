import { CommonTask } from "@external-lab-monorepo/types";

export interface ICommonTasksReducerState {
  commonTasks: CommonTask[];
  page: number;
  totalCount: number;
  error: any;
  loading: boolean;
  moreCommonTasksError: any;
  moreCommonTasksLoading: boolean;
}
