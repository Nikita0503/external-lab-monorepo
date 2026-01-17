import React from 'react';
import { View } from 'react-native';
import { IProps } from './CommonTasksScreen.types';

const CommonTasksScreen = ({
  allTasks,
  error,
  loading,
  moreCommonTasksError,
  moreCommonTasksLoading,
  fetchCommonTasks,
  fetchMoreCommonTasks,
}: IProps) => {
  return <View />;
};

export default React.memo(CommonTasksScreen);
