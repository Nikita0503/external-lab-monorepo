import "./SignInPage.css";
import type { IProps } from "./SignInPage.types";

const SignInPage = ({
  sprint: _sprint,
  email,
  password,
  passwordVisible,
  setEmail,
  setPassword,
  togglePasswordVisibility: _togglePasswordVisibility,
  onLoginPress,
  goToSignUp,
  showDevMenu: _showDevMenu,
}: IProps) => {
  return (
    <div className="sign-in-page">
      <p>email: {email}</p>
      <p>password: {password}</p>
      <p>passwordVisible: {String(passwordVisible)}</p>
      <button onClick={() => setEmail("")}>clear email</button>
      <button onClick={() => setPassword("")}>clear password</button>
      <button onClick={onLoginPress}>Log in</button>
      <button onClick={goToSignUp}>Go to Sign Up</button>
    </div>
  );
};

export default SignInPage;
