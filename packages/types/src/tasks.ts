export type TaskPriority = "low" | "high";

export interface Task {
  id: string;
  title: string;
  description: string;
  done: boolean;
  priority?: TaskPriority;
  files: any[];
}

export interface CommonTask {
  id: string;
  title: string;
}
