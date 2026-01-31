import React from 'react';
import { Alert, Pressable, Text } from 'react-native';
import useCamera from '../../../hooks/useCamera';
import useGallery from '../../../hooks/useGallery';
import { INewFile } from '../../../interfaces/general';
import styles from './AddFileListItem.styles';
import { IProps } from './AddFileListItem.types';

const AddFileListItem = ({ onAddFile }: IProps) => {
  const { pickPhoto } = useGallery();
  const { takePhoto } = useCamera();

  const onAddFilePress = React.useCallback(async () => {
    const handleChoice = async (choice: 'Gallery' | 'Camera') => {
      let photo;
      if (choice === 'Gallery') {
        photo = await pickPhoto();
      } else if (choice === 'Camera') {
        photo = await takePhoto();
      }
      if (photo) {
        const file: INewFile = {
          uri: photo,
          name: photo,
          type: 'image/jpeg',
        };
        onAddFile(file);
      }
    };

    Alert.alert(
      'Choose photo source',
      'Where do you want to take the photo from?',
      [
        {
          text: 'Gallery',
          onPress: async () => handleChoice('Gallery'),
        },
        {
          text: 'Camera',
          onPress: async () => handleChoice('Camera'),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
    );
  }, [onAddFile, pickPhoto, takePhoto]);

  return (
    <Pressable style={styles.button} onPress={onAddFilePress}>
      <Text style={styles.buttonText}>Add Photo</Text>
    </Pressable>
  );
};

export default AddFileListItem;
