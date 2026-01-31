import React from 'react';
import { Alert, Image, Pressable, View } from 'react-native';
import TaskDeleteSvgImage from '../../assets/icons/TaskDeleteSvgImage';
import TaskEditSvgImage from '../../assets/icons/TaskEditSvgImage';
import { EMPTY_PHOTO_URL, IMAGE_BASE_URL } from '../../constants/images';
import useCamera from '../../hooks/useCamera';
import useGallery from '../../hooks/useGallery';
import { INewFile } from '../../interfaces/general';
import styles from './UserAvatar.styles';
import { IProps } from './UserAvatar.types';

const UserAvatar = ({ avatar, setAvatar }: IProps) => {
  const { pickPhoto } = useGallery();
  const { takePhoto } = useCamera();

  const avatarUrl = React.useMemo<string>(() => {
    if (!avatar) {
      return EMPTY_PHOTO_URL;
    }
    if (typeof avatar === 'string') {
      return `${IMAGE_BASE_URL}/${avatar}`;
    }
    return avatar.uri;
  }, [avatar]);

  const onDeleteAvatarPress = React.useCallback(() => {
    setAvatar(undefined);
  }, [setAvatar]);

  const onChangeAvatarPress = React.useCallback(() => {
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
        setAvatar(file);
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
  }, [pickPhoto, takePhoto, setAvatar]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      <Pressable
        style={[styles.actionContainer, styles.deleteAvatarAction]}
        onPress={onDeleteAvatarPress}
      >
        <TaskDeleteSvgImage />
      </Pressable>
      <Pressable
        style={[styles.actionContainer, styles.changeAvatarAction]}
        onPress={onChangeAvatarPress}
      >
        <TaskEditSvgImage />
      </Pressable>
    </View>
  );
};

export default UserAvatar;
