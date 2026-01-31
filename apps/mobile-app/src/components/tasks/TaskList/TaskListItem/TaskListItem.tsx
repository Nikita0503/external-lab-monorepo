import { useTasks } from '@external-lab-monorepo/hooks';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, Pressable, Text, TouchableOpacity, View } from 'react-native';
import TaskActiveSvgImage from '../../../../assets/icons/TaskActiveSvgImage';
import TaskCompletedSvgImage from '../../../../assets/icons/TaskCompletedSvgImage';
import TaskDeleteSvgImage from '../../../../assets/icons/TaskDeleteSvgImage';
import TaskEditSvgImage from '../../../../assets/icons/TaskEditSvgImage';
import { ERouteNames } from '../../../../interfaces/navigation/routeNames';
import { AppStackParamList } from '../../../../interfaces/navigation/routeParams';
import styles from './TaskListItem.styles';
import { IProps } from './TaskListItem.types';

const TaskListItem = ({ task }: IProps) => {
  const { deleteTask, patchTask } = useTasks();

  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const onSwitchDonePress = React.useCallback(() => {
    patchTask(task.id, undefined, undefined, !task.done, [], task.files);
  }, [task]);

  const goToTaskDetails = React.useCallback(() => {
    navigation.navigate(ERouteNames.TASK_DETAILS, { taskId: task.id });
  }, [task]);

  const goToTaskEditor = React.useCallback(() => {
    navigation.navigate(ERouteNames.TASK_EDITOR, { taskId: task.id });
  }, [task]);

  const onDeleteTaskPress = React.useCallback(() => {
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
  }, [task]);

  return (
    <TouchableOpacity onPress={goToTaskDetails} style={styles.container}>
      <Pressable style={styles.taskStatusContainer} onPress={onSwitchDonePress}>
        {task.done ? <TaskCompletedSvgImage /> : <TaskActiveSvgImage />}
      </Pressable>
      <View style={styles.content}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles.titleText, task.done && styles.titleTextThrough]}
        >
          {task.title}
        </Text>

        <View style={styles.actionsContainer}>
          <Pressable style={styles.actionContainer} onPress={onDeleteTaskPress}>
            <TaskDeleteSvgImage />
          </Pressable>
          <Pressable style={styles.actionContainer} onPress={goToTaskEditor}>
            <TaskEditSvgImage />
          </Pressable>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskListItem;
