import { useTask } from '@external-lab-monorepo/hooks';
import TaskDetailsScreen from './TaskDetailsScreen';

const TaskDetailsContainer = () => {
  const { task, error, loading, fetchTaskData } = useTask('taskId');

  return (
    <TaskDetailsScreen
      task={task}
      error={error}
      loading={loading}
      fetchTaskData={fetchTaskData}
    />
  );
};

export default TaskDetailsContainer;
