import { Task } from "@external-lab-monorepo/types";

export interface ITasksReducerState {
  tasks: Task[];
  error: any;
  loading: boolean;
}
