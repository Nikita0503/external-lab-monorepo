import { useTasks } from '@external-lab-monorepo/hooks';
import TasksScreen from './AddTaskScreen';

const AddTaskContainer = () => {
  const { createTask } = useTasks();

  return <TasksScreen createTask={createTask} />;
};

export default AddTaskContainer;
