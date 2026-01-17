import React from 'react';
import { View } from 'react-native';
import { IProps } from './TaskDetailsScreen.types';

const TaskDetailsScreen = ({ task, error, loading, fetchTaskData }: IProps) => {
  return <View />;
};

export default React.memo(TaskDetailsScreen);
