import { View } from 'react-native';
import HighPriorityTaskSvgImage from '../../../../../assets/icons/HighPriorityTaskSvgImage';
import LowPriorityTaskSvgImage from '../../../../../assets/icons/LowPriorityTaskSvgImage';
import styles from './TaskListItemPriority.styles';
import { IProps } from './TaskListItemPriority.types';

const TaskListItemPriority = ({ priority }: IProps) => {
  return (
    <View style={styles.container}>
      {priority === 'low' && <LowPriorityTaskSvgImage />}
      {priority === 'high' && <HighPriorityTaskSvgImage />}
    </View>
  );
};

export default TaskListItemPriority;
