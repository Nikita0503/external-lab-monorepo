import { useTask, useTasks } from '@external-lab-monorepo/hooks';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Alert } from 'react-native';
import UniversalError from '../../../components/UniversalError';
import UniversalLoading from '../../../components/UniversalLoading';
import { IFile, INewFile } from '../../../interfaces/general';
import { ERouteNames } from '../../../interfaces/navigation/routeNames';
import { AppStackParamList } from '../../../interfaces/navigation/routeParams';
import EditTaskScreen from './EditTaskScreen';

const EditTaskContainer = () => {
  const {
    params: { taskId },
  } = useRoute<RouteProp<AppStackParamList, ERouteNames.EDIT_TASK>>();

  const { task, error, loading, fetchTaskData } = useTask(taskId);
  const { updateTask, deleteTask } = useTasks();

  React.useEffect(() => {
    fetchTaskData();
  }, [fetchTaskData]);

  React.useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setDone(task.done);
      setOldFiles(task.files);
      setNewFiles([]);
    }
  }, [task]);

  const navigation = useNavigation();

  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [done, setDone] = React.useState<boolean>(false);
  const [oldFiles, setOldFiles] = React.useState<IFile[]>([]);
  const [newFiles, setNewFiles] = React.useState<INewFile[]>([]);

  const files = React.useMemo(() => {
    return [...oldFiles, ...newFiles];
  }, [oldFiles, newFiles]);

  const onSwitchDonePress = React.useCallback(() => {
    setDone(!done);
  }, [done]);

  const goToTasks = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onUpdateTaskPress = React.useCallback(() => {
    updateTask(
      task!.id,
      title,
      description,
      done,
      newFiles,
      oldFiles,
      goToTasks,
    );
  }, [
    updateTask,
    task,
    title,
    description,
    done,
    newFiles,
    oldFiles,
    goToTasks,
  ]);

  const onDeleteTaskPress = React.useCallback(() => {
    Alert.alert('Are you sure?', 'Do you wanna delete the task?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          deleteTask(task!.id, goToTasks);
        },
      },
    ]);
  }, [deleteTask, goToTasks, task]);

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
      if ('image' in toDeleteFile) {
        setOldFiles(
          oldFiles.filter((file: IFile) => file.image !== toDeleteFile.image),
        );
      }
    },
    [newFiles, oldFiles],
  );

  const goBack = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  if (error) {
    return (
      <UniversalError
        errorText="Something went wrong. Probably task was not found"
        buttonText="Go Back"
        onHandleError={goBack}
      />
    );
  }

  if (loading) {
    return (
      <UniversalLoading
        loadingText="Task is loading..."
        buttonText="Go Back"
        onHandleLoading={goBack}
      />
    );
  }

  return (
    <EditTaskScreen
      title={title}
      description={description}
      done={done}
      files={files}
      setTitle={setTitle}
      setDescription={setDescription}
      onSwitchDonePress={onSwitchDonePress}
      onUpdateTaskPress={onUpdateTaskPress}
      onDeleteTaskPress={onDeleteTaskPress}
      onAddFile={onAddFile}
      onDeleteFile={onDeleteFile}
    />
  );
};

export default EditTaskContainer;
