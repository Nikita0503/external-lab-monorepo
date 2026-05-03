import { useAuth, useCurrentUser } from "@external-lab-monorepo/hooks";
import { useCallback, useEffect, useState } from "react";
import { useDevMenu } from "../../../contexts/DevMenuContext";
import ProfilePage from "./ProfilePage";

const ProfileContainer = () => {
  const { sprint } = useDevMenu();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState<File | undefined>(undefined);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const { currentUser, error, loading, fetchCurrentUser, updateCurrentUser } =
    useCurrentUser();
  const { logout } = useAuth();

  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  useEffect(() => {
    if (currentUser) {
      setEmail(currentUser.email);
      setName(currentUser.name);
      if (currentUser.avatar) {
        setAvatarPreview(`http://localhost:4000/${currentUser.avatar}`);
      }
    }
  }, [currentUser]);

  const onAvatarChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setAvatar(file);
        setAvatarPreview(URL.createObjectURL(file));
      }
    },
    []
  );

  const onAvatarDelete = useCallback(() => {
    setAvatar(undefined);
    setAvatarPreview(null);
  }, []);

  const onUpdateCurrentUserPress = useCallback(() => {
    updateCurrentUser(name, avatar, () => {
      alert("Congratulations! Profile updated successfully");
    });
  }, [name, avatar, updateCurrentUser]);

  const onLogoutPress = useCallback(() => {
    if (window.confirm("Are you sure you want to logout?")) {
      logout();
    }
  }, [logout]);

  return (
    <ProfilePage
      sprint={sprint}
      currentUser={currentUser}
      error={error}
      loading={loading}
      email={email}
      name={name}
      avatarPreview={avatarPreview}
      setName={setName}
      onAvatarChange={onAvatarChange}
      onAvatarDelete={onAvatarDelete}
      fetchCurrentUser={fetchCurrentUser}
      onUpdateCurrentUserPress={onUpdateCurrentUserPress}
      onLogoutPress={onLogoutPress}
    />
  );
};

export default ProfileContainer;
