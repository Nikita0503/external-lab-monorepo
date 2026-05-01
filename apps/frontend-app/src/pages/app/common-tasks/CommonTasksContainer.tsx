import { useCommonTasks } from "@external-lab-monorepo/hooks";
import { useEffect } from "react";
import CommonTasksPage from "./CommonTasksPage";

const CommonTasksContainer = () => {
  const {
    allTasks,
    error,
    loading,
    moreCommonTasksError,
    moreCommonTasksLoading,
    fetchCommonTasks,
    fetchMoreCommonTasks,
  } = useCommonTasks();

  useEffect(() => {
    fetchCommonTasks();
  }, [fetchCommonTasks]);

  return (
    <CommonTasksPage
      allTasks={allTasks}
      error={error}
      loading={loading}
      moreCommonTasksError={moreCommonTasksError}
      moreCommonTasksLoading={moreCommonTasksLoading}
      fetchCommonTasks={fetchCommonTasks}
      fetchMoreCommonTasks={fetchMoreCommonTasks}
    />
  );
};

export default CommonTasksContainer;
