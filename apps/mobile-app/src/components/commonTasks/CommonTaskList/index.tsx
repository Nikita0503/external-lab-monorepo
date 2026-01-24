import { CommonTask } from '@external-lab-monorepo/types';
import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import UniversalError from '../../UniversalError';
import CommonTaskListItem from './CommonTaskListItem';
import CommonTaskListFooter from './CommonTaskListLoader';
import CommonTaskListSeparator from './CommonTaskListSeparator';
import styles from './styles';

interface IProps {
  tasks: CommonTask[];
  error: any;
  loading: boolean;
  moreCommonTasksError: any;
  moreCommonTasksLoading: boolean;
  fetchCommonTasks: () => void;
  fetchMoreCommonTasks: () => void;
}

const CommonTaskList = ({
  tasks,
  error,
  loading,
  moreCommonTasksError,
  moreCommonTasksLoading,
  fetchCommonTasks,
  fetchMoreCommonTasks,
}: IProps) => {
  if (error) {
    return (
      <UniversalError
        errorText="Something went wrong"
        buttonText="Update Common Task List"
        onHandleError={fetchCommonTasks}
      />
    );
  }
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={fetchCommonTasks} />
      }
      data={tasks}
      ItemSeparatorComponent={CommonTaskListSeparator}
      keyExtractor={(item: CommonTask) => item.id.toString()}
      renderItem={({ item }) => <CommonTaskListItem task={item} />}
      onEndReached={fetchMoreCommonTasks}
      onEndReachedThreshold={0.2}
      ListFooterComponent={() => (
        <CommonTaskListFooter
          loading={moreCommonTasksLoading}
          error={moreCommonTasksError}
        />
      )}
    />
  );
};

export default CommonTaskList;
