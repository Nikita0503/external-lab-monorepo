import React from 'react';
import { View } from 'react-native';
import { IProps } from './AddTaskScreen.types';

const AddTaskScreen = ({ error, loading, createTask }: IProps) => {
  return <View />;
};

export default React.memo(AddTaskScreen);
