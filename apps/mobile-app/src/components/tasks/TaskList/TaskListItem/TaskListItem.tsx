import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import TaskActiveSvgImage from '../../../../assets/icons/TaskActiveSvgImage';
import TaskCompletedSvgImage from '../../../../assets/icons/TaskCompletedSvgImage';
import TaskDeleteSvgImage from '../../../../assets/icons/TaskDeleteSvgImage';
import TaskEditSvgImage from '../../../../assets/icons/TaskEditSvgImage';
import styles from './TaskListItem.styles';
import { IProps } from './TaskListItem.types';

const TaskListItem = ({
  task,
  goToTaskDetails,
  goToEditTask,
  onDeleteTaskPress,
  onSwitchDonePress,
}: IProps) => {
  const handleSwitchDonePress = () => {
    onSwitchDonePress(task);
  };

  const handleGoToTaskDetails = () => {
    goToTaskDetails(task);
  };

  const handleGoToEditTask = () => {
    goToEditTask(task);
  };

  const handleDeleteTaskPress = () => {
    onDeleteTaskPress(task);
  };

  return (
    <TouchableOpacity onPress={handleGoToTaskDetails} style={styles.container}>
      <Pressable
        style={styles.taskStatusContainer}
        onPress={handleSwitchDonePress}
      >
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
          <Pressable
            style={styles.actionContainer}
            onPress={handleDeleteTaskPress}
          >
            <TaskDeleteSvgImage />
          </Pressable>
          <Pressable
            style={styles.actionContainer}
            onPress={handleGoToEditTask}
          >
            <TaskEditSvgImage />
          </Pressable>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskListItem;
