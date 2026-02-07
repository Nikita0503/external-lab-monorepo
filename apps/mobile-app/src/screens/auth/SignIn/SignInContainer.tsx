import { useAuth } from '@external-lab-monorepo/hooks';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { useDevMenu } from '../../../contexts/DevMenuContext';
import usePasswordDisplayMode from '../../../hooks/usePasswordDisplayMode';
import { ERouteNames } from '../../../interfaces/navigation/routeNames';
import { AuthStackParamList } from '../../../interfaces/navigation/routeParams';
import SignInScreen from './SignInScreen';

const SignInContainer = () => {
  const { sprint, setShowDevMenu } = useDevMenu();
  const [email, setEmail] = React.useState<string>('example@gmail.com');
  const [password, setPassword] = React.useState<string>('Password12345');
  const { passwordDisplayMode, togglePasswordDisplayMode } =
    usePasswordDisplayMode();

  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  const { signIn } = useAuth();

  const onLoginPress = React.useCallback(() => {
    signIn(email, password);
  }, [email, password, signIn]);

  const goToSignUp = React.useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: ERouteNames.SIGN_UP_SCREEN }],
    });
  }, [navigation]);

  const showDevMenu = React.useCallback(() => {
    setShowDevMenu(true);
  }, [setShowDevMenu]);

  return (
    <SignInScreen
      sprint={sprint}
      email={email}
      password={password}
      passwordDisplayMode={passwordDisplayMode}
      setEmail={setEmail}
      setPassword={setPassword}
      togglePasswordDisplayMode={togglePasswordDisplayMode}
      onLoginPress={onLoginPress}
      goToSignUp={goToSignUp}
      showDevMenu={showDevMenu}
    />
  );
};

export default SignInContainer;
