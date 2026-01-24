import { useCurrentUser } from '@external-lab-monorepo/hooks';
import ProfileScreen from './ProfileScreen';

const ProfileContainer = () => {
  const { currentUser, error, loading, fetchCurrentUser, updateCurrentUser } =
    useCurrentUser();

  return (
    <ProfileScreen
      currentUser={currentUser}
      error={error}
      loading={loading}
      fetchCurrentUser={fetchCurrentUser}
      updateCurrentUser={updateCurrentUser}
    />
  );
};

export default ProfileContainer;
