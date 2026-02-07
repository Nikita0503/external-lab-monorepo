import React from 'react';
import { FlatList } from 'react-native';
import { IFile, INewFile } from '../../../interfaces/general';
import AddFileListItem from './AddFileListItem';
import { IAddFileListHeaderProps, IProps } from './TaskFileList.types';
import TaskFileListItem from './TaskFileListItem';
import TaskFileListSeparator from './TaskFileListSeparator';

const AddFileListHeader = ({ onAddFile }: IAddFileListHeaderProps) => (
  <AddFileListItem onAddFile={onAddFile} />
);

const TaskFileList = ({ files, onDeleteFile, onAddFile }: IProps) => {
  const keyExtractor = React.useCallback((item: IFile | INewFile): string => {
    return 'id' in item ? item.id.toString() : item.uri;
  }, []);

  return (
    <FlatList
      horizontal
      data={files}
      ItemSeparatorComponent={TaskFileListSeparator}
      keyExtractor={keyExtractor}
      renderItem={({ item }) => (
        <TaskFileListItem file={item} onDeleteFile={onDeleteFile} />
      )}
      ListHeaderComponent={
        onAddFile ? <AddFileListHeader onAddFile={onAddFile} /> : null
      }
    />
  );
};

export default TaskFileList;
