export type TaskPriority = "low" | "high";

export interface Task {
  id: string;
  title: string;
  description: string;
  done: boolean;
  priority?: TaskPriority;
}

export interface CommonTask {
  id: string;
  title: string;
}
