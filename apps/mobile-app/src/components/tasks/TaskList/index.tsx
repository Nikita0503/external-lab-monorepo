import { Task } from '@external-lab-monorepo/types';
import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import UniversalError from '../../UniversalError';
import TaskListItem from './TaskListItem';
import TaskListSeparator from './TaskListSeparator';
import styles from './styles';

interface IProps {
  tasks: Task[];
  error: any;
  loading: boolean;
  fetchTasks: () => void;
}

const TaskList = ({ tasks, error, loading, fetchTasks }: IProps) => {
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
      renderItem={({ item }) => <TaskListItem task={item} />}
    />
  );
};

export default TaskList;
