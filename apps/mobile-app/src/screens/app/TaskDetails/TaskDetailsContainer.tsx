import { useTask, useTasks } from '@external-lab-monorepo/hooks';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import UniversalError from '../../../components/UniversalError';
import UniversalLoading from '../../../components/UniversalLoading';
import { ERouteNames } from '../../../interfaces/navigation/routeNames';
import { AppStackParamList } from '../../../interfaces/navigation/routeParams';
import TaskDetailsScreen from './TaskDetailsScreen';

const TaskDetailsContainer = () => {
  const {
    params: { taskId },
  } = useRoute<RouteProp<AppStackParamList, ERouteNames.TASK_DETAILS>>();

  const { task, error, loading, fetchTaskData } = useTask(taskId);
  const { deleteTask } = useTasks();

  React.useEffect(() => {
    fetchTaskData();
  }, []);

  const navigation = useNavigation();

  const goBack = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  if (error) {
    return (
      <UniversalError
        errorText="Something went wrong. Probably task was not found"
        buttonText="Go to Task List"
        onHandleError={goBack}
      />
    );
  }

  if (loading) {
    return (
      <UniversalLoading
        loadingText="Task is loading..."
        buttonText="Go to Task List"
        onHandleLoading={goBack}
      />
    );
  }

  return <TaskDetailsScreen task={task!} deleteTask={deleteTask} />;
};

export default TaskDetailsContainer;
