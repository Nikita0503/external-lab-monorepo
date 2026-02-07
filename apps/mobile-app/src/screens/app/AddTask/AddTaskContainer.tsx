import { useTasks } from '@external-lab-monorepo/hooks';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { IFile, INewFile } from '../../../interfaces/general';
import AddTaskScreen from './AddTaskScreen';

const AddTaskContainer = () => {
  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [files, setFiles] = React.useState<INewFile[]>([]);

  const navigation = useNavigation();

  const { createTask } = useTasks();

  const goToTasks = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onCreateTaskPress = React.useCallback(() => {
    createTask(title, description, files, goToTasks);
  }, [createTask, title, description, files, goToTasks]);

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
      title={title}
      description={description}
      files={files}
      setTitle={setTitle}
      setDescription={setDescription}
      onCreateTaskPress={onCreateTaskPress}
      onAddFile={onAddFile}
      onDeleteFile={onDeleteFile}
    />
  );
};

export default AddTaskContainer;
