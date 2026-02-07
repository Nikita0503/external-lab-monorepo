import { SPRINTS } from '@external-lab-monorepo/constants';
import { useTask, useTasks } from '@external-lab-monorepo/hooks';
import { TaskPriority } from '@external-lab-monorepo/types';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Alert } from 'react-native';
import UniversalError from '../../../components/UniversalError';
import UniversalLoading from '../../../components/UniversalLoading';
import { useDevMenu } from '../../../contexts/DevMenuContext';
import { IFile, INewFile } from '../../../interfaces/general';
import { ERouteNames } from '../../../interfaces/navigation/routeNames';
import { AppStackParamList } from '../../../interfaces/navigation/routeParams';
import EditTaskScreen from './EditTaskScreen';

const EditTaskContainer = () => {
  const { sprint } = useDevMenu();

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
      setPriority(task.priority!);
    }
  }, [task]);

  const navigation = useNavigation();

  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [done, setDone] = React.useState<boolean>(false);
  const [oldFiles, setOldFiles] = React.useState<IFile[]>([]);
  const [newFiles, setNewFiles] = React.useState<INewFile[]>([]);
  const [priority, setPriority] = React.useState<TaskPriority>('low');

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
    let selectedPriority: TaskPriority | undefined;
    if (sprint === SPRINTS.SPRINT_4) {
      selectedPriority = priority;
    }
    updateTask(
      task!.id,
      title,
      description,
      done,
      newFiles,
      oldFiles,
      selectedPriority,
      goToTasks,
    );
  }, [
    sprint,
    updateTask,
    task,
    title,
    description,
    done,
    newFiles,
    oldFiles,
    priority,
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
      sprint={sprint}
      title={title}
      description={description}
      done={done}
      files={files}
      priority={priority}
      setTitle={setTitle}
      setDescription={setDescription}
      onSwitchDonePress={onSwitchDonePress}
      onUpdateTaskPress={onUpdateTaskPress}
      onDeleteTaskPress={onDeleteTaskPress}
      onAddFile={onAddFile}
      onDeleteFile={onDeleteFile}
      setPriority={setPriority}
    />
  );
};

export default EditTaskContainer;
