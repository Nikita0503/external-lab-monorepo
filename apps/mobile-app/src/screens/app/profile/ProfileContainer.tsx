import { useCurrentUser } from '@external-lab-monorepo/hooks';
import ProfileScreen from './ProfileScreen';

const ProfileContainer = () => {
  const { currentUser, error, loading, fetchCurrentUser } = useCurrentUser();

  return (
    <ProfileScreen
      currentUser={currentUser}
      error={error}
      loading={loading}
      fetchCurrentUser={fetchCurrentUser}
    />
  );
};

export default ProfileContainer;
