import { useCommonTasks } from '@external-lab-monorepo/hooks';
import React from 'react';
import CommonTasksScreen from './CommonTasksScreen';

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

  React.useEffect(() => {
    fetchCommonTasks();
  }, [fetchCommonTasks]);

  return (
    <CommonTasksScreen
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
