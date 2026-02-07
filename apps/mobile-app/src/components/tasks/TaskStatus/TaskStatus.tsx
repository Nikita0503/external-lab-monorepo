import { SPRINTS } from '@external-lab-monorepo/constants';
import { Text, View } from 'react-native';
import TaskStatusDoneSvgImage from '../../../assets/icons/TaskStatusDoneSvgImage';
import TaskStatusInProgressSvgImage from '../../../assets/icons/TaskStatusInProgressSvgImage';
import { useDevMenu } from '../../../contexts/DevMenuContext';
import styles from './TaskStatus.styles';
import { IProps } from './TaskStatus.types';

const TaskStatus = ({ done }: IProps) => {
  const { sprint } = useDevMenu();
  return (
    <View
      style={[
        styles.taskStatusContainer,
        done
          ? styles.taskStatusContainerDone
          : styles.taskStatusContainerInProgress,
      ]}
    >
      {sprint === SPRINTS.SPRINT_4 && (
        <View style={styles.taskStatusIconContainer}>
          {done ? <TaskStatusDoneSvgImage /> : <TaskStatusInProgressSvgImage />}
        </View>
      )}
      <Text style={styles.taskStatusText}>{done ? 'DONE' : 'IN PROGRESS'}</Text>
    </View>
  );
};

export default TaskStatus;
