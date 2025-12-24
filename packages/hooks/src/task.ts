import { fetchTaskApi } from "@external-lab-monorepo/api";
import { Task } from "@external-lab-monorepo/types";
import React from "react";

export const useTask = (taskId: string) => {
  const [task, setTask] = React.useState<Task | undefined>(undefined);
  const [error, setError] = React.useState<any>(undefined);
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchTaskData = React.useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchTaskApi(taskId);
      if (response.data) {
        setTask(response.data);
        setError(undefined);
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [taskId]);

  React.useEffect(() => {
    fetchTaskData();
  }, [taskId]);

  return { task, error, loading };
};
