import React from 'react';
import { View } from 'react-native';
import { IProps } from './ProfileScreen.types';

const ProfileScreen = ({
  currentUser,
  error,
  loading,
  fetchCurrentUser,
}: IProps) => {
  return <View />;
};

export default React.memo(ProfileScreen);
