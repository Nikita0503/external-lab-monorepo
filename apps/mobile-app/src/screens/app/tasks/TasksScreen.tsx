import React from 'react';
import { View } from 'react-native';
import { IProps } from './TasksScreen.types';

const TasksScreen = ({ tasks, error, loading, fetchTasks }: IProps) => {
  return <View />;
};

export default React.memo(TasksScreen);
