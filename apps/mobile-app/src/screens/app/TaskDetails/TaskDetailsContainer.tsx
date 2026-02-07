import { useTask, useTasks } from '@external-lab-monorepo/hooks';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React from 'react';
import { Alert } from 'react-native';
import UniversalError from '../../../components/UniversalError';
import UniversalLoading from '../../../components/UniversalLoading';
import { useDevMenu } from '../../../contexts/DevMenuContext';
import { ERouteNames } from '../../../interfaces/navigation/routeNames';
import { AppStackParamList } from '../../../interfaces/navigation/routeParams';
import TaskDetailsScreen from './TaskDetailsScreen';

const TaskDetailsContainer = () => {
  const { sprint } = useDevMenu();

  const {
    params: { taskId },
  } = useRoute<RouteProp<AppStackParamList, ERouteNames.TASK_DETAILS>>();

  const { task, error, loading, fetchTaskData } = useTask(taskId);
  const { deleteTask } = useTasks();
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  React.useEffect(() => {
    fetchTaskData();
  }, [fetchTaskData]);

  const goBack = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const goToTasks = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onDeleteTaskPress = React.useCallback(() => {
    Alert.alert('Are you sure?', 'Do you wanna delete the task?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          deleteTask(task!.id, goToTasks);
        },
      },
    ]);
  }, [task, deleteTask, goToTasks]);

  const goToEditTask = React.useCallback(() => {
    navigation.goBack();
    navigation.navigate(ERouteNames.EDIT_TASK, {
      taskId: task!.id,
    });
  }, [navigation, task]);

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

  return (
    <TaskDetailsScreen
      sprint={sprint}
      task={task!}
      goToTasks={goToTasks}
      goToEditTask={goToEditTask}
      onDeleteTaskPress={onDeleteTaskPress}
    />
  );
};

export default TaskDetailsContainer;
