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
  const [avatar, setAvatar] = useState<File | undefined>(undefined);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const navigate = useNavigate();
  const { signUp } = useAuth();

  const onSignUpPress = useCallback(() => {
    signUp(email, name, password, repeatPassword, avatar);
  }, [signUp, email, name, password, repeatPassword, avatar]);

  const goToSignIn = useCallback(() => {
    navigate(ROUTES.SIGN_IN, { replace: true });
  }, [navigate]);

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisible((prev) => !prev);
  }, []);

  const onAvatarChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setAvatar(file);
        setAvatarPreview(URL.createObjectURL(file));
      }
    },
    []
  );

  const onAvatarDelete = useCallback(() => {
    setAvatar(undefined);
    setAvatarPreview(null);
  }, []);

  return (
    <SignUpPage
      sprint={sprint}
      email={email}
      name={name}
      password={password}
      repeatPassword={repeatPassword}
      passwordVisible={passwordVisible}
      avatarPreview={avatarPreview}
      setEmail={setEmail}
      setName={setName}
      setPassword={setPassword}
      setRepeatPassword={setRepeatPassword}
      togglePasswordVisibility={togglePasswordVisibility}
      onAvatarChange={onAvatarChange}
      onAvatarDelete={onAvatarDelete}
      onSignUpPress={onSignUpPress}
      goToSignIn={goToSignIn}
    />
  );
};

export default SignUpContainer;
