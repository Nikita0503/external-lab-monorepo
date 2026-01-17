import { useAuth } from '@external-lab-monorepo/hooks';
import SignInScreen from './SignInScreen';

const SignInContainer = () => {
  const { signIn } = useAuth();

  return <SignInScreen signIn={signIn} />;
};

export default SignInContainer;
