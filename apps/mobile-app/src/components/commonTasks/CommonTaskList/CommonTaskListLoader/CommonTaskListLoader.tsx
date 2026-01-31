import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import styles from './CommonTaskListLoader.styles';
import { IProps } from './CommonTaskListLoader.types';

const CommonTaskListFooter = ({ loading, error }: IProps) => {
  return (
    <View style={styles.container}>
      {error && (
        <View style={styles.errorContainer}>
          <Text>Oops... More tasks are not available</Text>
        </View>
      )}
      {loading && <ActivityIndicator />}
    </View>
  );
};

export default CommonTaskListFooter;
