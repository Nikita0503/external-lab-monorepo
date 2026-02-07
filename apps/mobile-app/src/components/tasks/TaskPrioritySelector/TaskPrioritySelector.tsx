import React from 'react';
import { Pressable, Text, View } from 'react-native';
import TaskPriority from '../TaskPriority/TaskPriority';
import styles from './TaskPrioritySelector.styles';
import { IProps } from './TaskPrioritySelector.types';

const TaskPrioritySelector = ({ priority, selectPriority }: IProps) => {
  const selectLowPriority = React.useCallback(() => {
    selectPriority('low');
  }, [selectPriority]);

  const selectHighPriority = React.useCallback(() => {
    selectPriority('high');
  }, [selectPriority]);

  return (
    <View style={styles.container}>
      <Text style={styles.hintText}>Task priority</Text>
      <View style={styles.content}>
        <Pressable
          onPress={selectLowPriority}
          style={[
            styles.priorityContainer,
            styles.priorityContainerLeft,
            priority === 'low' && styles.priorityContainerLowPrioritySelected,
          ]}
        >
          <TaskPriority priority="low" />
        </Pressable>
        <Pressable
          onPress={selectHighPriority}
          style={[
            styles.priorityContainer,
            styles.priorityContainerRight,
            priority === 'high' && styles.priorityContainerHighPrioritySelected,
          ]}
        >
          <TaskPriority priority="high" />
        </Pressable>
      </View>
    </View>
  );
};

export default TaskPrioritySelector;
