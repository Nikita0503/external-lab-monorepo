import { CommonTask } from '@external-lab-monorepo/types';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface IProps {
  task: CommonTask;
}

const CommonTaskListItem = ({ task }: IProps) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={[styles.titleText]}>
        {task.title}
      </Text>
    </View>
  );
};

export default CommonTaskListItem;
