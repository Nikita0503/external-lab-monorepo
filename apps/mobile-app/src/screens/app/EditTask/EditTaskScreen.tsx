import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import TaskActiveSvgImage from '../../../assets/icons/TaskActiveSvgImage';
import TaskCompletedSvgImage from '../../../assets/icons/TaskCompletedSvgImage';
import CustomButton from '../../../components/CustomButton';
import Header from '../../../components/headers/Header';
import TaskFileList from '../../../components/TaskFileList';
import TextInputWithHint from '../../../components/TextInputWithHint';
import { IFile, INewFile } from '../../../interfaces/general';
import styles from './EditTaskScreen.styles';
import { IProps } from './EditTaskScreen.types';

const EditTaskScreen = ({ task, updateTask, deleteTask }: IProps) => {
  const [title, setTitle] = React.useState<string>(task.title);
  const [description, setDescription] = React.useState<string>(
    task.description,
  );
  const [done, setDone] = React.useState<boolean>(task.done);
  const [oldFiles, setOldFiles] = React.useState<IFile[]>(task.files);
  const [newFiles, setNewFiles] = React.useState<INewFile[]>([]);

  const files = React.useMemo(() => {
    return [...oldFiles, ...newFiles];
  }, [oldFiles, newFiles]);

  const navigation = useNavigation();

  const onSwitchDonePress = React.useCallback(() => {
    setDone(!done);
  }, [task, done]);

  const goToTasks = React.useCallback(() => {
    navigation.goBack();
  }, []);

  const onUpdateTaskPress = React.useCallback(() => {
    updateTask(
      task.id,
      title,
      description,
      done,
      newFiles,
      oldFiles,
      goToTasks,
    );
  }, [task, title, description, done, newFiles, oldFiles]);

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

  const onAddFile = React.useCallback(
    (file: INewFile) => {
      setNewFiles([...newFiles, file]);
    },
    [newFiles],
  );

  const onDeleteFile = React.useCallback(
    (toDeleteFile: IFile | INewFile) => {
      if ('type' in toDeleteFile && 'uri' in toDeleteFile) {
        setNewFiles(
          newFiles.filter((file: INewFile) => file.name !== toDeleteFile.name),
        );
      }
      setOldFiles(
        oldFiles.filter((file: IFile) => file.name !== toDeleteFile.name),
      );
    },
    [newFiles, oldFiles],
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Header
        title="Edit task"
        actionButton={{ title: 'Delete', onPress: onDeleteTaskPress }}
      />
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <View style={styles.infoContainer}>
            <View style={styles.infoItemContainer}>
              <TextInputWithHint
                hint="Task title"
                value={title}
                onChangeText={setTitle}
              />
            </View>
            <View style={styles.infoItemContainer}>
              <TextInputWithHint
                hint="Task description"
                value={description}
                onChangeText={setDescription}
              />
            </View>
            <Pressable
              style={styles.taskStatusContainer}
              onPress={onSwitchDonePress}
            >
              <Text style={styles.taskStatusText}>Done</Text>
              {done ? <TaskCompletedSvgImage /> : <TaskActiveSvgImage />}
            </Pressable>
            <View style={styles.infoItemContainer}>
              <TaskFileList
                files={files}
                onAddFile={onAddFile}
                onDeleteFile={onDeleteFile}
              />
            </View>
          </View>
          <CustomButton buttonStyle={styles.button} onPress={onUpdateTaskPress}>
            Save
          </CustomButton>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default React.memo(EditTaskScreen);
