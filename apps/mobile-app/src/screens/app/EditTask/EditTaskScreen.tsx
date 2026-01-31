import React from 'react';
import {
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
import styles from './EditTaskScreen.styles';
import { IProps } from './EditTaskScreen.types';

const EditTaskScreen = ({
  title,
  description,
  done,
  files,
  setTitle,
  setDescription,
  onUpdateTaskPress,
  onAddFile,
  onDeleteFile,
  onSwitchDonePress,
  onDeleteTaskPress,
}: IProps) => {
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
