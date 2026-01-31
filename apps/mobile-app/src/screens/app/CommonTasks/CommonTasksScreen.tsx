import React from 'react';
import { View } from 'react-native';
import CommonTaskList from '../../../components/commonTasks/CommonTaskList';
import Header from '../../../components/headers/Header';
import styles from '../Profile/ProfileScreen.styles';
import { IProps } from './CommonTasksScreen.types';

const CommonTasksScreen = ({
  allTasks,
  error,
  loading,
  moreCommonTasksError,
  moreCommonTasksLoading,
  fetchCommonTasks,
  fetchMoreCommonTasks,
}: IProps) => {
  React.useEffect(() => {
    fetchCommonTasks();
  }, [fetchCommonTasks]);

  return (
    <View style={styles.container}>
      <Header title="Common Tasks" hideBackButton={true} />
      <CommonTaskList
        tasks={allTasks}
        error={error}
        loading={loading}
        moreCommonTasksError={moreCommonTasksError}
        moreCommonTasksLoading={moreCommonTasksLoading}
        fetchCommonTasks={fetchCommonTasks}
        fetchMoreCommonTasks={fetchMoreCommonTasks}
      />
    </View>
  );
};

export default React.memo(CommonTasksScreen);
