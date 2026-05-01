import { SPRINTS } from "@external-lab-monorepo/constants";
import { memo } from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import TextInputWithHint from "../../../components/TextInputWithHint/TextInputWithHint";
import "./SignInPage.css";
import type { IProps } from "./SignInPage.types";

const SignInPage = ({
  sprint,
  email,
  password,
  passwordVisible,
  setEmail,
  setPassword,
  togglePasswordVisibility,
  onLoginPress,
  goToSignUp,
  showDevMenu,
}: IProps) => {
  return (
    <div className="sign-in-page">
      <div className="sign-in-card">
        <div className="sign-in-logo-container" onClick={showDevMenu}>
          <div className="sign-in-logo">📋</div>
          <h1 className="sign-in-welcome">Welcome!</h1>
        </div>

        <div className="sign-in-inputs">
          <TextInputWithHint
            hint="Email"
            value={email}
            onChange={setEmail}
            type="email"
          />
          <TextInputWithHint
            hint="Password"
            value={password}
            onChange={setPassword}
            showPasswordToggle={sprint === SPRINTS.SPRINT_4}
            passwordVisible={passwordVisible}
            onTogglePassword={togglePasswordVisibility}
          />
        </div>

        <div className="sign-in-buttons">
          <CustomButton onClick={onLoginPress}>Log in</CustomButton>
          <CustomButton onClick={goToSignUp}>Go to Sign Up</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default memo(SignInPage);
