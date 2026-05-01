import { useAuth } from "@external-lab-monorepo/hooks";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDevMenu } from "../../../contexts/DevMenuContext";
import { ROUTES } from "../../../router/routes";
import SignUpPage from "./SignUpPage";

const SignUpContainer = () => {
  const { sprint } = useDevMenu();
  const [email, setEmail] = useState("example@gmail.com");
  const [name, setName] = useState("Example");
  const [password, setPassword] = useState("Password12345");
  const [repeatPassword, setRepeatPassword] = useState("Password12345");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();
  const { signUp } = useAuth();

  const onSignUpPress = useCallback(() => {
    signUp(email, name, password, repeatPassword, undefined);
  }, [signUp, email, name, password, repeatPassword]);

  const goToSignIn = useCallback(() => {
    navigate(ROUTES.SIGN_IN, { replace: true });
  }, [navigate]);

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisible((prev) => !prev);
  }, []);

  return (
    <SignUpPage
      sprint={sprint}
      email={email}
      name={name}
      password={password}
      repeatPassword={repeatPassword}
      passwordVisible={passwordVisible}
      setEmail={setEmail}
      setName={setName}
      setPassword={setPassword}
      setRepeatPassword={setRepeatPassword}
      togglePasswordVisibility={togglePasswordVisibility}
      onSignUpPress={onSignUpPress}
      goToSignIn={goToSignIn}
    />
  );
};

export default SignUpContainer;
