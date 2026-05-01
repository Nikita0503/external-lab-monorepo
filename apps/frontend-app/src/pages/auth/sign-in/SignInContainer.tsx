import { useAuth } from "@external-lab-monorepo/hooks";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDevMenu } from "../../../contexts/DevMenuContext";
import { ROUTES } from "../../../router/routes";
import SignInPage from "./SignInPage";

const SignInContainer = () => {
  const { sprint, setShowDevMenu } = useDevMenu();
  const [email, setEmail] = useState("example@gmail.com");
  const [password, setPassword] = useState("Password12345");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();
  const { signIn } = useAuth();

  const onLoginPress = useCallback(() => {
    signIn(email, password);
  }, [email, password, signIn]);

  const goToSignUp = useCallback(() => {
    navigate(ROUTES.SIGN_UP, { replace: true });
  }, [navigate]);

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisible((prev) => !prev);
  }, []);

  const showDevMenu = useCallback(() => {
    setShowDevMenu(true);
  }, [setShowDevMenu]);

  return (
    <SignInPage
      sprint={sprint}
      email={email}
      password={password}
      passwordVisible={passwordVisible}
      setEmail={setEmail}
      setPassword={setPassword}
      togglePasswordVisibility={togglePasswordVisibility}
      onLoginPress={onLoginPress}
      goToSignUp={goToSignUp}
      showDevMenu={showDevMenu}
    />
  );
};

export default SignInContainer;
