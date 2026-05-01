import "./ProfilePage.css";
import type { IProps } from "./ProfilePage.types";

const ProfilePage = ({
  sprint: _sprint,
  currentUser,
  error,
  loading,
  email,
  name,
  setName: _setName,
  fetchCurrentUser: _fetchCurrentUser,
  onUpdateCurrentUserPress: _onUpdateCurrentUserPress,
  onLogoutPress: _onLogoutPress,
}: IProps) => {
  return (
    <div className="profile-page">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Loading: {String(loading)}</p>
      <p>Error: {error ? "yes" : "no"}</p>
      <p>User loaded: {currentUser ? "yes" : "no"}</p>
    </div>
  );
};

export default ProfilePage;
