import {
  createTaskApi,
  deleteTaskApi,
  deleteTaskAttachmentApi,
  editTaskApi,
  fetchTasksApi,
  partialEditTaskApi,
} from "@external-lab-monorepo/api";
import { Task } from "@external-lab-monorepo/types";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import {
  IAddTaskAction,
  ICreateTaskAsyncAction,
  IDeleteTaskAsyncAction,
  IFetchTaskAsyncAction,
  IPatchTaskAsyncAction,
  IRemoveTaskAction,
  ISetError,
  ISetLoadingAction,
  ISetTasksAction,
  IUpdateTaskAction,
  IUpdateTaskAsyncAction,
} from "../interfaces/actions/tasksActions";
import { taskInfoSelector } from "../selectors/taskSelectors";

export const setTasksAction = createAction<ISetTasksAction>(
  "tasks/setTasksAction"
);

export const addTaskAction = createAction<IAddTaskAction>(
  "tasks/addTaskAction"
);

export const updateTaskAction = createAction<IUpdateTaskAction>(
  "tasks/updateTaskAction"
);

export const removeTaskAction = createAction<IRemoveTaskAction>(
  "tasks/removeTaskAction"
);

export const setErrorAction = createAction<ISetError>("tasks/setErrorAction");

export const setLoadingAction = createAction<ISetLoadingAction>(
  "tasks/setLoadingAction"
);

export const fetchTasksAsyncAction = createAsyncThunk<
  void,
  IFetchTaskAsyncAction
>("tasks/fetchTasksAsyncAction", async (_, { dispatch }) => {
  try {
    dispatch(setLoadingAction({ loading: true }));
    const res = await fetchTasksApi();
    const tasks = res.data;
    dispatch(setTasksAction({ tasks: tasks }));
    dispatch(setErrorAction({ error: undefined }));
  } catch (e: any) {
    dispatch(setErrorAction({ error: e }));
    console.log("tasksActions::fetchTasksAsyncAction error:", e);
  } finally {
    dispatch(setLoadingAction({ loading: false }));
  }
});

export const createTaskAsyncAction = createAsyncThunk<
  void,
  ICreateTaskAsyncAction
>(
  "tasks/createTaskAsyncAction",
  async (
    { title, description, files, onSuccess, onError }: ICreateTaskAsyncAction,
    { dispatch }
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      await createTaskApi(title, description, files);
      dispatch(fetchTasksAsyncAction({}));
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log("🔴 tasksActions::createTaskAsyncAction error:", e);
      if (onError) {
        onError(e);
      }
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);

export const updateTaskAsyncAction = createAsyncThunk<
  void,
  IUpdateTaskAsyncAction
>(
  "tasks/updateTaskAsyncAction",
  async (
    {
      taskId,
      title,
      description,
      done,
      files,
      oldFiles,
      onSuccess,
      onError,
    }: IUpdateTaskAsyncAction,
    { getState, dispatch }
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const state: RootState = getState() as RootState;
      const taskInfo: Task | undefined = taskInfoSelector(taskId)(state);
      if (taskInfo) {
        const deletedFiles = taskInfo.files.filter(
          (file: any) => !oldFiles.some((oldFile) => oldFile.name === file.name)
        );
        for (let i = 0; i < deletedFiles.length; i++) {
          await deleteTaskAttachmentApi(taskId, deletedFiles[i].id);
        }
      }
      await editTaskApi(taskId, title, description, files, done);
      dispatch(fetchTasksAsyncAction({}));
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log("🔴 tasksActions::updateTaskAsyncAction error:", e);
      if (onError) {
        onError(e);
      }
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);

export const patchTaskAsyncAction = createAsyncThunk<
  void,
  IPatchTaskAsyncAction
>(
  "tasks/patchTaskAsyncAction",
  async (
    {
      taskId,
      title,
      description,
      done,
      files,
      oldFiles,
      onSuccess,
      onError,
    }: IPatchTaskAsyncAction,
    { getState, dispatch }
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const state: RootState = getState() as RootState;
      const taskInfo: Task | undefined = taskInfoSelector(taskId)(state);
      if (taskInfo && oldFiles) {
        const deletedFiles = taskInfo.files.filter(
          (file: any) => !oldFiles.some((oldFile) => oldFile.name === file.name)
        );
        for (let i = 0; i < deletedFiles.length; i++) {
          await deleteTaskAttachmentApi(taskId, deletedFiles[i].id);
        }
      }
      await partialEditTaskApi(taskId, title, description, files, done);
      dispatch(fetchTasksAsyncAction({}));
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log("tasksActions::patchTaskAsyncAction error:", e);
      if (onError) {
        onError(e);
      }
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);

export const deleteTaskAsyncAction = createAsyncThunk<
  void,
  IDeleteTaskAsyncAction
>(
  "tasks/deleteTaskAsyncAction",
  async ({ taskId, onSuccess }: IDeleteTaskAsyncAction, { dispatch }) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await deleteTaskApi(taskId);
      dispatch(fetchTasksAsyncAction({}));
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log("tasksActions::deleteTaskAsyncAction error:", e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);
