import { SPRINTS } from "@external-lab-monorepo/constants";
import { memo } from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import TextInputWithHint from "../../../components/TextInputWithHint/TextInputWithHint";
import UniversalError from "../../../components/UniversalError/UniversalError";
import UniversalLoading from "../../../components/UniversalLoading/UniversalLoading";
import UserAvatar from "../../../components/UserAvatar/UserAvatar";
import "./ProfilePage.css";
import type { IProps } from "./ProfilePage.types";

const ProfilePage = ({
  sprint,
  currentUser,
  error,
  loading,
  email,
  name,
  avatarPreview,
  setName,
  onAvatarChange,
  onAvatarDelete,
  fetchCurrentUser,
  onUpdateCurrentUserPress,
  onLogoutPress,
}: IProps) => {
  return (
    <div className="profile-page">
      <h2 className="profile-title">Profile</h2>

      {loading && <UniversalLoading loadingText="Your profile is loading..." />}

      {!loading && !!error && (
        <UniversalError
          errorText="Something went wrong. Probably user was not found"
          buttonText="Update Profile"
          onHandleError={fetchCurrentUser}
        />
      )}

      {!loading && !error && currentUser && (
        <div className="profile-card">
          <UserAvatar
            avatarPreview={avatarPreview}
            onAvatarChange={onAvatarChange}
            onAvatarDelete={onAvatarDelete}
            className="user-avatar-container--dark"
          />

          <div className="profile-fields">
            <TextInputWithHint
              hint="Name"
              value={name}
              onChange={setName}
              className="text-input-field--dark"
            />
            <TextInputWithHint
              hint="Email"
              value={email}
              disabled
              className="text-input-field--dark"
            />
          </div>

          <div
            className={`profile-buttons ${sprint === SPRINTS.SPRINT_4 ? "profile-buttons--horizontal" : ""}`}
          >
            <CustomButton onClick={onUpdateCurrentUserPress}>
              Update
            </CustomButton>
            <CustomButton onClick={onLogoutPress}>Logout</CustomButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(ProfilePage);
