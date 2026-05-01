import { SPRINTS } from "@external-lab-monorepo/constants";
import { memo } from "react";
import "./SignUpPage.css";
import type { IProps } from "./SignUpPage.types";

const SignUpPage = ({
  sprint,
  email,
  name,
  password,
  repeatPassword,
  passwordVisible,
  setEmail,
  setName,
  setPassword,
  setRepeatPassword,
  togglePasswordVisibility,
  onSignUpPress,
  goToSignIn,
}: IProps) => {
  return (
    <div className="sign-up-page">
      <div className="sign-up-card">
        <h1 className="sign-up-title">Create Account</h1>

        <div className="sign-up-inputs">
          <div className="sign-up-field">
            <label className="sign-up-label">Email</label>
            <input
              className="sign-up-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="sign-up-field">
            <label className="sign-up-label">Name</label>
            <input
              className="sign-up-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="sign-up-field">
            <label className="sign-up-label">Password</label>
            <div className="sign-up-password-wrapper">
              <input
                className="sign-up-input"
                type={passwordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {sprint === SPRINTS.SPRINT_4 && (
                <button
                  type="button"
                  className="sign-up-eye-button"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? "👁" : "👁‍🗨"}
                </button>
              )}
            </div>
          </div>

          <div className="sign-up-field">
            <label className="sign-up-label">Repeat password</label>
            <input
              className="sign-up-input"
              type={passwordVisible ? "text" : "password"}
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="sign-up-buttons">
          <button className="sign-up-button" onClick={onSignUpPress}>
            Sign Up
          </button>
          <button className="sign-up-button" onClick={goToSignIn}>
            Go to Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(SignUpPage);
