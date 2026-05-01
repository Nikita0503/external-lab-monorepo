import "./SignUpPage.css";
import type { IProps } from "./SignUpPage.types";

const SignUpPage = ({
  sprint: _sprint,
  email,
  name,
  password,
  repeatPassword,
  passwordVisible,
  setEmail,
  setName,
  setPassword,
  setRepeatPassword,
  togglePasswordVisibility: _togglePasswordVisibility,
  onSignUpPress,
  goToSignIn,
}: IProps) => {
  return (
    <div className="sign-up-page">
      <p>email: {email}</p>
      <p>name: {name}</p>
      <p>password: {password}</p>
      <p>repeatPassword: {repeatPassword}</p>
      <p>passwordVisible: {String(passwordVisible)}</p>
      <button onClick={() => setEmail("")}>clear email</button>
      <button onClick={() => setName("")}>clear name</button>
      <button onClick={() => setPassword("")}>clear password</button>
      <button onClick={() => setRepeatPassword("")}>clear repeat</button>
      <button onClick={onSignUpPress}>Sign Up</button>
      <button onClick={goToSignIn}>Go to Sign In</button>
    </div>
  );
};

export default SignUpPage;
