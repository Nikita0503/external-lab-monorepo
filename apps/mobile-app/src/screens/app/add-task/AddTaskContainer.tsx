import { useTasks } from '@external-lab-monorepo/hooks';
import TasksScreen from './AddTaskScreen';

const AddTaskContainer = () => {
  const { createTask, error, loading } = useTasks();

  return (
    <TasksScreen error={error} loading={loading} createTask={createTask} />
  );
};

export default AddTaskContainer;
