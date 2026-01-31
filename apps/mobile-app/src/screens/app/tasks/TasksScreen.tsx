import React from 'react';
import { View } from 'react-native';
import TaskListHeader from '../../../components/headers/TaskListHeader';
import TaskList from '../../../components/tasks/TaskList';
import styles from './TasksScreen.styles';
import { IProps } from './TasksScreen.types';

const TasksScreen = ({
  tasks,
  error,
  loading,
  fetchTasks,
  goToTaskDetails,
  goToEditTask,
  onDeleteTaskPress,
  onSwitchDonePress,
}: IProps) => {
  React.useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <View style={styles.container}>
      <TaskListHeader taskCount={tasks.length} />
      <TaskList
        tasks={tasks}
        error={error}
        loading={loading}
        fetchTasks={fetchTasks}
        goToTaskDetails={goToTaskDetails}
        goToEditTask={goToEditTask}
        onDeleteTaskPress={onDeleteTaskPress}
        onSwitchDonePress={onSwitchDonePress}
      />
    </View>
  );
};

export default React.memo(TasksScreen);
