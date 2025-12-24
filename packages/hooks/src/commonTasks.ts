import { actions, AppDispatch, RootState } from "@external-lab-monorepo/store";
import { CommonTask } from "@external-lab-monorepo/types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const useCommonTasks = () => {
  const dispatch = useDispatch<AppDispatch>();

  const allTasks = useSelector<RootState, CommonTask[]>(
    (state: RootState) => state.commonTasks.commonTasks
  );

  const error = useSelector<RootState, any>(
    (state: RootState) => state.commonTasks.error
  );

  const loading = useSelector<RootState, boolean>(
    (state: RootState) => state.commonTasks.loading
  );

  const moreCommonTasksError = useSelector<RootState, any>(
    (state: RootState) => state.commonTasks.moreCommonTasksError
  );

  const moreCommonTasksLoading = useSelector<RootState, boolean>(
    (state: RootState) => state.commonTasks.moreCommonTasksLoading
  );

  const fetchCommonTasks = React.useCallback(
    (onSuccess: () => void, onError?: (error: any) => void) => {
      dispatch(
        actions.commonTasks.fetchCommonTasksAsyncAction({
          onSuccess: onSuccess,
          onError: onError,
        })
      );
    },
    []
  );

  const fetchMoreCommonTasks = React.useCallback(
    (onSuccess: () => void, onError?: (error: any) => void) => {
      dispatch(
        actions.commonTasks.fetchMoreCommonTasksAsyncAction({
          onSuccess,
          onError,
        })
      );
    },
    []
  );

  return {
    allTasks,
    error,
    loading,
    moreCommonTasksError,
    moreCommonTasksLoading,
    fetchCommonTasks,
    fetchMoreCommonTasks,
  };
};
