import React from 'react';
import { Text, View } from 'react-native';
import HighPriorityTaskSvgImage from '../../../assets/icons/HighPriorityTaskSvgImage';
import LowPriorityTaskSvgImage from '../../../assets/icons/LowPriorityTaskSvgImage';
import styles from './TaskPriority.styles';
import { IProps } from './TaskPriority.types';

const TaskPriority = ({ priority, showTitle }: IProps) => {
  const title = React.useMemo(() => {
    return priority.charAt(0).toUpperCase() + priority.slice(1);
  }, [priority]);
  return (
    <View style={styles.container}>
      {priority === 'low' && <LowPriorityTaskSvgImage />}
      {priority === 'high' && <HighPriorityTaskSvgImage />}
      {showTitle && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

export default TaskPriority;
