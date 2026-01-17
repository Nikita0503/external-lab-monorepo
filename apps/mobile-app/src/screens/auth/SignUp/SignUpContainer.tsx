import { useAuth } from '@external-lab-monorepo/hooks';
import SignUpScreen from './SignUpScreen';

const SignUpContainer = () => {
  const { signUp } = useAuth();

  return <SignUpScreen signUp={signUp} />;
};

export default SignUpContainer;
