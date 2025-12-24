import { CommonTask } from "@external-lab-monorepo/types";

export interface ISetCommonTasksAction {
  tasks: CommonTask[];
}

export interface IAddCommonTasksAction {
  tasks: CommonTask[];
}

export interface ISetCommonTasksPageAction {
  page: number;
}

export interface ISetCommonTasksTotalCount {
  totalCount: number;
}

export interface ISetError {
  error: any;
}

export interface ISetLoadingAction {
  loading: boolean;
}

export interface ISetMoreCommonTasksError {
  error: any;
}

export interface ISetMoreCommonTasksLoading {
  loading: boolean;
}

export interface IFetchCommonTasksAsyncAction {
  onSuccess?: () => void;
  onError?: (error: any) => void;
}

export interface IFetchMoreCommonTasksAsyncAction {
  onSuccess?: () => void;
  onError?: (error: any) => void;
}
