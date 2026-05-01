import type { CommonTask } from "@external-lab-monorepo/types";

export interface IProps {
  allTasks: CommonTask[];
  error: unknown;
  loading: boolean;
  moreCommonTasksError: unknown;
  moreCommonTasksLoading: boolean;
  fetchCommonTasks: () => void;
  fetchMoreCommonTasks: () => void;
}
