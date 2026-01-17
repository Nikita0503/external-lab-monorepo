import { useCommonTasks } from '@external-lab-monorepo/hooks';
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
