import { SPRINTS } from '@external-lab-monorepo/constants';
import { useTasks } from '@external-lab-monorepo/hooks';
import { Task } from '@external-lab-monorepo/types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert } from 'react-native';
import { useDevMenu } from '../../../contexts/DevMenuContext';
import { ERouteNames } from '../../../interfaces/navigation/routeNames';
import { AppStackParamList } from '../../../interfaces/navigation/routeParams';
import TasksScreen from './TasksScreen';

const TasksContainer = () => {
  const { sprint } = useDevMenu();

  const { tasks, error, loading, fetchTasks, patchTask, deleteTask } =
    useTasks();

  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  React.useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const onSwitchDonePress = React.useCallback(
    (task: Task) => {
      if (sprint === SPRINTS.SPRINT_1 || sprint === SPRINTS.SPRINT_2) {
        return;
      }
      patchTask(task.id, undefined, undefined, !task.done, [], task.files);
    },
    [patchTask, sprint],
  );

  const goToTaskDetails = React.useCallback(
    (task: Task) => {
      if (sprint === SPRINTS.SPRINT_1 || sprint === SPRINTS.SPRINT_2) {
        return;
      }
      navigation.navigate(ERouteNames.TASK_DETAILS, { taskId: task.id });
    },
    [navigation, sprint],
  );

  const goToEditTask = React.useCallback(
    (task: Task) => {
      if (sprint === SPRINTS.SPRINT_1 || sprint === SPRINTS.SPRINT_2) {
        return;
      }
      navigation.navigate(ERouteNames.EDIT_TASK, { taskId: task.id });
    },
    [navigation, sprint],
  );

  const onDeleteTaskPress = React.useCallback(
    (task: Task) => {
      Alert.alert('Are you sure?', 'Do you wanna delete the task?', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            deleteTask(task.id);
          },
        },
      ]);
    },
    [deleteTask],
  );

  return (
    <TasksScreen
      tasks={tasks}
      error={error}
      loading={loading}
      fetchTasks={fetchTasks}
      goToTaskDetails={goToTaskDetails}
      goToEditTask={goToEditTask}
      onSwitchDonePress={onSwitchDonePress}
      onDeleteTaskPress={onDeleteTaskPress}
    />
  );
};

export default TasksContainer;
