import { useAuth, useCurrentUser } from '@external-lab-monorepo/hooks';
import React from 'react';
import { Alert } from 'react-native';
import { useDevMenu } from '../../../contexts/DevMenuContext';
import { INewFile } from '../../../interfaces/general';
import ProfileScreen from './ProfileScreen';

const ProfileContainer = () => {
  const { sprint } = useDevMenu();
  const [email, setEmail] = React.useState<string>('');
  const [name, setName] = React.useState<string>('');
  const [avatar, setAvatar] = React.useState<
    INewFile | string | undefined | null
  >(undefined);

  const { currentUser, error, loading, fetchCurrentUser, updateCurrentUser } =
    useCurrentUser();
  const { logout } = useAuth();

  React.useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  React.useEffect(() => {
    if (currentUser) {
      setEmail(currentUser.email);
      setName(currentUser.name);
      setAvatar(currentUser.avatar);
    }
  }, [currentUser]);

  const showCongratulations = React.useCallback(() => {
    Alert.alert('Congratulations!', 'Profile updated successfully');
  }, []);

  const onUpdateCurrentUserPress = React.useCallback(() => {
    updateCurrentUser(name, avatar, showCongratulations);
  }, [name, avatar, updateCurrentUser, showCongratulations]);

  const onLogoutPress = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          logout();
        },
      },
    ]);
  };

  return (
    <ProfileScreen
      sprint={sprint}
      currentUser={currentUser}
      error={error}
      loading={loading}
      email={email}
      name={name}
      avatar={avatar}
      setName={setName}
      setAvatar={setAvatar}
      fetchCurrentUser={fetchCurrentUser}
      onUpdateCurrentUserPress={onUpdateCurrentUserPress}
      onLogoutPress={onLogoutPress}
    />
  );
};

export default ProfileContainer;
