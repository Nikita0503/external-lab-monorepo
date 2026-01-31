import { Task } from '@external-lab-monorepo/types';
import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import UniversalError from '../../UniversalError';
import styles from './TaskList.styles';
import { IProps } from './TaskList.types';
import TaskListItem from './TaskListItem';
import TaskListSeparator from './TaskListSeparator';

const TaskList = ({
  tasks,
  error,
  fetchTasks,
  goToTaskDetails,
  goToEditTask,
  onDeleteTaskPress,
  onSwitchDonePress,
}: IProps) => {
  if (error) {
    return (
      <UniversalError
        errorText="Something went wrong"
        buttonText="Update Task List"
        onHandleError={fetchTasks}
      />
    );
  }
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={fetchTasks} />
      }
      data={tasks}
      ItemSeparatorComponent={TaskListSeparator}
      keyExtractor={(item: Task) => item.id.toString()}
      renderItem={({ item }) => (
        <TaskListItem
          task={item}
          goToTaskDetails={goToTaskDetails}
          goToEditTask={goToEditTask}
          onDeleteTaskPress={onDeleteTaskPress}
          onSwitchDonePress={onSwitchDonePress}
        />
      )}
    />
  );
};

export default TaskList;
