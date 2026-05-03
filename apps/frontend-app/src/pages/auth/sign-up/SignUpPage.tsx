import { SPRINTS } from "@external-lab-monorepo/constants";
import { memo } from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import TextInputWithHint from "../../../components/TextInputWithHint/TextInputWithHint";
import UserAvatar from "../../../components/UserAvatar/UserAvatar";
import "./SignUpPage.css";
import type { IProps } from "./SignUpPage.types";

const SignUpPage = ({
  sprint,
  email,
  name,
  password,
  repeatPassword,
  passwordVisible,
  avatarPreview,
  setEmail,
  setName,
  setPassword,
  setRepeatPassword,
  togglePasswordVisibility,
  onAvatarChange,
  onAvatarDelete,
  onSignUpPress,
  goToSignIn,
}: IProps) => {
  return (
    <div className="sign-up-page">
      <div className="sign-up-card">
        <h1 className="sign-up-title">Create Account</h1>

        <UserAvatar
          avatarPreview={avatarPreview}
          onAvatarChange={onAvatarChange}
          onAvatarDelete={onAvatarDelete}
        />

        <div className="sign-up-inputs">
          <TextInputWithHint
            hint="Email"
            value={email}
            onChange={setEmail}
            type="email"
          />
          <TextInputWithHint
            hint="Name"
            value={name}
            onChange={setName}
          />
          <TextInputWithHint
            hint="Password"
            value={password}
            onChange={setPassword}
            showPasswordToggle={sprint === SPRINTS.SPRINT_4}
            passwordVisible={passwordVisible}
            onTogglePassword={togglePasswordVisibility}
          />
          <TextInputWithHint
            hint="Repeat password"
            value={repeatPassword}
            onChange={setRepeatPassword}
            type={passwordVisible ? "text" : "password"}
          />
        </div>

        <div className="sign-up-buttons">
          <CustomButton onClick={onSignUpPress}>Sign Up</CustomButton>
          <CustomButton onClick={goToSignIn}>Go to Sign In</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default memo(SignUpPage);
