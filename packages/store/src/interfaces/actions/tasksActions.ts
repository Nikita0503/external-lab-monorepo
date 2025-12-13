import { Task } from "@external-lab-monorepo/types";

export interface ISetTasksAction {
  tasks: Task[];
}

export interface IAddTaskAction {
  task: Task;
}

export interface IUpdateTaskAction {
  task: Task;
}

export interface IRemoveTaskAction {
  task: Task;
}

export interface ISetError {
  error: any;
}

export interface ISetLoadingAction {
  loading: boolean;
}

export interface IFetchTaskAsyncAction {
  onSuccess?: () => void;
  onError?: (error: any) => void;
}

export interface ICreateTaskAsyncAction {
  title: string;
  description: string;
  files: any[];
  onSuccess?: () => void;
  onError?: (error: any) => void;
}

export interface IUpdateTaskAsyncAction {
  taskId: string;
  title: string;
  description: string;
  done: boolean;
  files: any[];
  oldFiles: any[];
  onSuccess?: () => void;
  onError?: (error: any) => void;
}

export interface IPatchTaskAsyncAction {
  taskId: string;
  title: string | undefined;
  description: string | undefined;
  done: boolean | undefined;
  files?: any[];
  oldFiles?: any[];
  onSuccess?: () => void;
  onError?: (error: any) => void;
}

export interface IDeleteTaskAsyncAction {
  taskId: string;
  onSuccess?: () => void;
  onError?: (error: any) => void;
}
