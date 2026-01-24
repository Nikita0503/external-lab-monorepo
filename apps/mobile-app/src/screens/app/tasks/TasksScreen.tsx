import React from 'react';
import { View } from 'react-native';
import TaskListHeader from '../../../components/headers/TaskListHeader';
import TaskList from '../../../components/tasks/TaskList';
import styles from './TasksScreen.styles';
import { IProps } from './TasksScreen.types';

const TasksScreen = ({ tasks, error, loading, fetchTasks }: IProps) => {
  React.useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <View style={styles.container}>
      <TaskListHeader taskCount={tasks.length} />
      <TaskList
        tasks={tasks}
        error={error}
        loading={loading}
        fetchTasks={fetchTasks}
      />
    </View>
  );
};

export default React.memo(TasksScreen);
