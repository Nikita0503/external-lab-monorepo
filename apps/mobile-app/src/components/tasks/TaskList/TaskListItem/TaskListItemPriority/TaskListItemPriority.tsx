import { View } from 'react-native';
import TaskPriority from '../../../TaskPriority';
import styles from './TaskListItemPriority.styles';
import { IProps } from './TaskListItemPriority.types';

const TaskListItemPriority = ({ priority }: IProps) => {
  return (
    <View style={styles.container}>
      <TaskPriority priority={priority} />
    </View>
  );
};

export default TaskListItemPriority;
