import React from 'react';
import { Text, View } from 'react-native';
import styles from './CommonTaskListItem.styles';
import { IProps } from './CommonTaskListItem.types';

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
