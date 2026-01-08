import { useTasks } from '@external-lab-monorepo/hooks';
import TasksScreen from './TasksScreen';

const TasksContainer = () => {
  const { tasks, error, loading, fetchTasks } = useTasks();

  return (
    <TasksScreen
      tasks={tasks}
      error={error}
      loading={loading}
      fetchTasks={fetchTasks}
    />
  );
};

export default TasksContainer;
