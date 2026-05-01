import { useCommonTasks } from "@external-lab-monorepo/hooks";
import type { RootState } from "@external-lab-monorepo/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
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

  const totalCount = useSelector<RootState, number>(
    (state) => state.commonTasks.totalCount
  );

  useEffect(() => {
    fetchCommonTasks();
  }, [fetchCommonTasks]);

  const hasMore = allTasks.length < totalCount;

  return (
    <CommonTasksPage
      allTasks={allTasks}
      error={error}
      loading={loading}
      hasMore={hasMore}
      moreCommonTasksError={moreCommonTasksError}
      moreCommonTasksLoading={moreCommonTasksLoading}
      fetchCommonTasks={fetchCommonTasks}
      fetchMoreCommonTasks={fetchMoreCommonTasks}
    />
  );
};

export default CommonTasksContainer;
