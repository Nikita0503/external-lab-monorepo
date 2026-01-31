import { createStackNavigator } from '@react-navigation/stack';
import { SCREEN_OPTIONS } from '../../constants/navigation';
import { ERouteNames } from '../../interfaces/navigation/routeNames';
import { AuthStackParamList } from '../../interfaces/navigation/routeParams';
import SignInScreen from '../../screens/auth/SignIn';
import SignUpScreen from '../../screens/auth/SignUp';

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={SCREEN_OPTIONS}>
      <AuthStack.Screen
        name={ERouteNames.SIGN_IN_SCREEN}
        component={SignInScreen}
      />
      <AuthStack.Screen
        name={ERouteNames.SIGN_UP_SCREEN}
        component={SignUpScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
