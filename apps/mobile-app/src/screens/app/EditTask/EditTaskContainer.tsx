import { useTask, useTasks } from '@external-lab-monorepo/hooks';
import EditTaskScreen from './EditTaskScreen';

const EditTaskContainer = () => {
  const { task, error, loading, fetchTaskData } = useTask('taskId');
  const { updateTask } = useTasks();

  return (
    <EditTaskScreen
      task={task}
      error={error}
      loading={loading}
      updateTask={updateTask}
    />
  );
};

export default EditTaskContainer;
