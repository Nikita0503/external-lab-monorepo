import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import TaskDeleteSvgImage from '../../../assets/icons/TaskDeleteSvgImage';
import { IMAGE_BASE_URL } from '../../../constants/images';
import styles from './TaskFileListItem.styles';
import { IProps } from './TaskFileListItem.types';
import TaskFileListItemModal from './TaskFileListItemModal';

const TaskFileListItem = ({ file, onDeleteFile }: IProps) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const fileUrl = React.useMemo<string>(() => {
    if ('type' in file && 'uri' in file) {
      return file.uri;
    }
    return `${IMAGE_BASE_URL}/${file.image}`;
  }, [file]);

  const onDeleteFilePress = React.useCallback(() => {
    if (onDeleteFile) {
      onDeleteFile(file);
    }
  }, [file, onDeleteFile]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setModalVisible(true)}
    >
      <Image source={{ uri: fileUrl }} style={styles.image} />
      <TaskFileListItemModal
        fileUrl={fileUrl}
        visible={modalVisible}
        closeModal={() => setModalVisible(false)}
      />
      {!!onDeleteFile && (
        <TouchableOpacity
          style={styles.actionContainer}
          onPress={onDeleteFilePress}
        >
          <TaskDeleteSvgImage />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default TaskFileListItem;
