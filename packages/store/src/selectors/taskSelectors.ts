import { Task } from "@external-lab-monorepo/types";
import { createSelector } from "reselect";
import { RootState } from "../index";

const tasksSelector = (state: RootState) => state.tasks.tasks;

export const taskInfoSelector = (taskId: string) =>
  createSelector([tasksSelector], (tasks: Task[]) =>
    tasks.find((task: Task) => task.id == taskId)
  );
