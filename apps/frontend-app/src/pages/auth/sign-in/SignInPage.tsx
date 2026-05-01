import { SPRINTS } from "@external-lab-monorepo/constants";
import { memo } from "react";
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
          <div className="sign-in-field">
            <label className="sign-in-label">Email</label>
            <input
              className="sign-in-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="sign-in-field">
            <label className="sign-in-label">Password</label>
            <div className="sign-in-password-wrapper">
              <input
                className="sign-in-input"
                type={passwordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {sprint === SPRINTS.SPRINT_4 && (
                <button
                  type="button"
                  className="sign-in-eye-button"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? "👁" : "👁‍🗨"}
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="sign-in-buttons">
          <button className="sign-in-button" onClick={onLoginPress}>
            Log in
          </button>
          <button className="sign-in-button" onClick={goToSignUp}>
            Go to Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(SignInPage);
