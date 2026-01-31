import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import CustomButton from '../../../components/CustomButton';
import Header from '../../../components/headers/Header';
import TaskFileList from '../../../components/TaskFileList';
import styles from './TaskDetailsScreen.styles';
import { IProps } from './TaskDetailsScreen.types';

const TaskDetailsScreen = ({
  task,
  onDeleteTaskPress,
  goToEditTask,
}: IProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Header title="Task Details" />
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.description}>{task.description}</Text>
        <View
          style={[
            styles.taskStatusContainer,
            task.done
              ? styles.taskStatusContainerDone
              : styles.taskStatusContainerInProgress,
          ]}
        >
          <Text style={styles.taskStatusText}>
            {task.done ? 'DONE' : 'IN PROGRESS'}
          </Text>
        </View>
        <TaskFileList files={task.files} />
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <CustomButton buttonStyle={styles.button} onPress={onDeleteTaskPress}>
          Delete
        </CustomButton>
        <CustomButton buttonStyle={styles.button} onPress={goToEditTask}>
          Edit
        </CustomButton>
      </View>
    </KeyboardAvoidingView>
  );
};

export default React.memo(TaskDetailsScreen);
