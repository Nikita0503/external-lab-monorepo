import { useAuth, useCurrentUser } from "@external-lab-monorepo/hooks";
import { useCallback, useEffect, useState } from "react";
import { useDevMenu } from "../../../contexts/DevMenuContext";
import ProfilePage from "./ProfilePage";

const ProfileContainer = () => {
  const { sprint } = useDevMenu();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

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
    }
  }, [currentUser]);

  const onUpdateCurrentUserPress = useCallback(() => {
    updateCurrentUser(name, undefined, () => {
      alert("Congratulations! Profile updated successfully");
    });
  }, [name, updateCurrentUser]);

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
      setName={setName}
      fetchCurrentUser={fetchCurrentUser}
      onUpdateCurrentUserPress={onUpdateCurrentUserPress}
      onLogoutPress={onLogoutPress}
    />
  );
};

export default ProfileContainer;
