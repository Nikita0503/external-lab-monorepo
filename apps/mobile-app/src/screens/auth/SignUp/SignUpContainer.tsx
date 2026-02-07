import { useAuth } from '@external-lab-monorepo/hooks';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { useDevMenu } from '../../../contexts/DevMenuContext';
import usePasswordDisplayMode from '../../../hooks/usePasswordDisplayMode';
import { INewFile } from '../../../interfaces/general';
import { ERouteNames } from '../../../interfaces/navigation/routeNames';
import { AuthStackParamList } from '../../../interfaces/navigation/routeParams';
import SignUpScreen from './SignUpScreen';

const SignUpContainer = () => {
  const { sprint } = useDevMenu();
  const [email, setEmail] = React.useState<string>('example@gmail.com');
  const [name, setName] = React.useState<string>('Example');
  const [password, setPassword] = React.useState<string>('Password12345');
  const [repeatPassword, setRepeatPassword] =
    React.useState<string>('Password12345');
  const [avatar, setAvatar] = React.useState<INewFile | undefined>(undefined);
  const { passwordDisplayMode, togglePasswordDisplayMode } =
    usePasswordDisplayMode();

  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const { signUp } = useAuth();

  const onSignUpPress = React.useCallback(() => {
    signUp(email, name, password, repeatPassword, avatar);
  }, [signUp, email, name, password, repeatPassword, avatar]);

  const goToSignIn = React.useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: ERouteNames.SIGN_IN_SCREEN }],
    });
  }, [navigation]);
  return (
    <SignUpScreen
      sprint={sprint}
      email={email}
      name={name}
      password={password}
      repeatPassword={repeatPassword}
      avatar={avatar}
      passwordDisplayMode={passwordDisplayMode}
      setEmail={setEmail}
      setName={setName}
      setPassword={setPassword}
      setRepeatPassword={setRepeatPassword}
      setAvatar={setAvatar}
      togglePasswordDisplayMode={togglePasswordDisplayMode}
      onSignUpPress={onSignUpPress}
      goToSignIn={goToSignIn}
    />
  );
};

export default SignUpContainer;
