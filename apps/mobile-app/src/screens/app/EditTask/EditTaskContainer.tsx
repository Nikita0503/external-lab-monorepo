import { useTask, useTasks } from '@external-lab-monorepo/hooks';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import UniversalError from '../../../components/UniversalError';
import UniversalLoading from '../../../components/UniversalLoading';
import { ERouteNames } from '../../../interfaces/navigation/routeNames';
import { AppStackParamList } from '../../../interfaces/navigation/routeParams';
import EditTaskScreen from './EditTaskScreen';

const EditTaskContainer = () => {
  const {
    params: { taskId },
  } = useRoute<RouteProp<AppStackParamList, ERouteNames.TASK_EDITOR>>();

  const { task, error, loading, fetchTaskData } = useTask(taskId);
  const { updateTask, deleteTask } = useTasks();

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
        buttonText="Go Back"
        onHandleError={goBack}
      />
    );
  }

  if (loading) {
    return (
      <UniversalLoading
        loadingText="Task is loading..."
        buttonText="Go Back"
        onHandleLoading={goBack}
      />
    );
  }

  return (
    <EditTaskScreen
      task={task!}
      updateTask={updateTask}
      deleteTask={deleteTask}
    />
  );
};

export default EditTaskContainer;
