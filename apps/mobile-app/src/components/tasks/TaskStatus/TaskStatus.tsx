import { Text, View } from 'react-native';
import styles from './TaskStatus.styles';
import { IProps } from './TaskStatus.types';

const TaskStatus = ({ done }: IProps) => {
  return (
    <View
      style={[
        styles.taskStatusContainer,
        done
          ? styles.taskStatusContainerDone
          : styles.taskStatusContainerInProgress,
      ]}
    >
      <Text style={styles.taskStatusText}>{done ? 'DONE' : 'IN PROGRESS'}</Text>
    </View>
  );
};

export default TaskStatus;
