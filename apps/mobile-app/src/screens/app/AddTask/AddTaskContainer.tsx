import { SPRINTS } from '@external-lab-monorepo/constants';
import { useTasks } from '@external-lab-monorepo/hooks';
import { TaskPriority } from '@external-lab-monorepo/types';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useDevMenu } from '../../../contexts/DevMenuContext';
import { IFile, INewFile } from '../../../interfaces/general';
import AddTaskScreen from './AddTaskScreen';

const AddTaskContainer = () => {
  const { sprint } = useDevMenu();

  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [files, setFiles] = React.useState<INewFile[]>([]);
  const [priority, setPriority] = React.useState<TaskPriority>('low');

  const navigation = useNavigation();

  const { createTask } = useTasks();

  const goToTasks = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onCreateTaskPress = React.useCallback(() => {
    let selectedPriority: TaskPriority | undefined;
    if (sprint === SPRINTS.SPRINT_4) {
      selectedPriority = priority;
    }
    createTask(title, description, files, selectedPriority, goToTasks);
  }, [sprint, createTask, title, description, files, priority, goToTasks]);

  const onAddFile = React.useCallback(
    (file: IFile | INewFile) => {
      setFiles([...files, file as INewFile]);
    },
    [files],
  );

  const onDeleteFile = React.useCallback(
    (toDeleteFile: IFile | INewFile) => {
      if ('type' in toDeleteFile && 'uri' in toDeleteFile) {
        setFiles(
          files.filter((file: INewFile) => file.name !== toDeleteFile.name),
        );
      }
    },
    [files],
  );

  return (
    <AddTaskScreen
      sprint={sprint}
      title={title}
      description={description}
      files={files}
      priority={priority}
      setTitle={setTitle}
      setDescription={setDescription}
      onCreateTaskPress={onCreateTaskPress}
      onAddFile={onAddFile}
      onDeleteFile={onDeleteFile}
      setPriority={setPriority}
    />
  );
};

export default AddTaskContainer;
