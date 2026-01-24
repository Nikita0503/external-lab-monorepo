import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import CustomButton from '../../../components/CustomButton';
import Header from '../../../components/headers/Header';
import TaskFileList from '../../../components/TaskFileList';
import { ERouteNames } from '../../../interfaces/navigation/routeNames';
import { AppStackParamList } from '../../../interfaces/navigation/routeParams';
import styles from './TaskDetailsScreen.styles';
import { IProps } from './TaskDetailsScreen.types';

const TaskDetailsScreen = ({ task, deleteTask }: IProps) => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const goToTasks = React.useCallback(() => {
    navigation.goBack();
  }, []);

  const onDeleteTaskPress = React.useCallback(() => {
    Alert.alert('Are you sure?', 'Do you wanna delete the task?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          deleteTask(task.id, goToTasks);
        },
      },
    ]);
  }, [task]);

  const goToTaskEditor = React.useCallback(() => {
    navigation.goBack();
    navigation.navigate(ERouteNames.TASK_EDITOR, {
      taskId: task.id,
    });
  }, [task]);

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
        <CustomButton buttonStyle={styles.button} onPress={goToTaskEditor}>
          Edit
        </CustomButton>
      </View>
    </KeyboardAvoidingView>
  );
};

export default React.memo(TaskDetailsScreen);
