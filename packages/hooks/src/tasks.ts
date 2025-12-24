import { actions, AppDispatch, RootState } from "@external-lab-monorepo/store";
import { Task } from "@external-lab-monorepo/types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const useTasks = () => {
  const dispatch = useDispatch<AppDispatch>();

  const tasks = useSelector<RootState, Task[]>(
    (state: RootState) => state.tasks.tasks
  );

  const error = useSelector<RootState, any>(
    (state: RootState) => state.tasks.error
  );

  const loading = useSelector<RootState, boolean>(
    (state: RootState) => state.tasks.loading
  );

  const fetchTasks = React.useCallback(
    (onSuccess: () => void, onError?: (error: any) => void) => {
      dispatch(
        actions.tasks.fetchTasksAsyncAction({
          onSuccess: onSuccess,
          onError: onError,
        })
      );
    },
    []
  );

  const createTask = React.useCallback(
    (
      title: string,
      description: string,
      files: any[],
      onSuccess?: () => void,
      onError?: (error: any) => void
    ) => {
      dispatch(
        actions.tasks.createTaskAsyncAction({
          title: title,
          description: description,
          files: files,
          onSuccess: onSuccess,
          onError: onError,
        })
      );
    },
    []
  );

  const updateTask = React.useCallback(
    (
      taskId: string,
      title: string,
      description: string,
      done: boolean,
      files: any[],
      oldFiles: any[],
      onSuccess?: () => void,
      onError?: (error: any) => void
    ) => {
      dispatch(
        actions.tasks.updateTaskAsyncAction({
          taskId: taskId,
          title: title,
          description: description,
          done: done,
          files: files,
          oldFiles: oldFiles,
          onSuccess: onSuccess,
          onError: onError,
        })
      );
    },
    []
  );

  const patchTask = React.useCallback(
    (
      taskId: string,
      title: string | undefined,
      description: string | undefined,
      done: boolean | undefined,
      files: any[],
      oldFiles: any[],
      onSuccess?: () => void,
      onError?: (error: any) => void
    ) => {
      dispatch(
        actions.tasks.patchTaskAsyncAction({
          taskId: taskId,
          title: title,
          description: description,
          done: done,
          files: files,
          oldFiles: oldFiles,
          onSuccess: onSuccess,
          onError: onError,
        })
      );
    },
    []
  );

  const deleteTask = React.useCallback(
    (
      taskId: string,
      onSuccess?: () => void,
      onError?: (error: any) => void
    ) => {
      dispatch(
        actions.tasks.deleteTaskAsyncAction({
          taskId: taskId,
          onSuccess: onSuccess,
          onError: onError,
        })
      );
    },
    []
  );

  return {
    tasks,
    error,
    loading,
    fetchTasks,
    createTask,
    updateTask,
    patchTask,
    deleteTask,
  };
};
