import { useAuth } from '@external-lab-monorepo/hooks';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ERouteNames } from '../interfaces/navigation/routeNames';
import {
  AppStackParamList,
  AuthStackParamList,
} from '../interfaces/navigation/routeParams';
import AddTaskContainer from '../screens/app/AddTask/AddTaskContainer';
import EditTaskContainer from '../screens/app/EditTask/EditTaskContainer';
import TaskDetailsContainer from '../screens/app/TaskDetails/TaskDetailsContainer';
import SignInContainer from '../screens/auth/SignIn/SignInContainer';
import SignUpContainer from '../screens/auth/SignUp/SignUpContainer';
import styles from './styles';
import Tabs from './tabs';

const AuthStack = createStackNavigator<AuthStackParamList>();
const AppStack = createStackNavigator<AppStackParamList>();

const AppNavigation = () => {
  const { accessToken } = useAuth();

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <NavigationContainer>
        {!accessToken ? (
          <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen
              name={ERouteNames.SIGN_IN_SCREEN}
              component={SignInContainer}
            />
            <AuthStack.Screen
              name={ERouteNames.SIGN_UP_SCREEN}
              component={SignUpContainer}
            />
          </AuthStack.Navigator>
        ) : (
          <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name={ERouteNames.TABS_SCREEN} component={Tabs} />
            <AppStack.Screen
              name={ERouteNames.TASK_DETAILS}
              component={TaskDetailsContainer}
            />
            <AppStack.Screen
              name={ERouteNames.TASK_CREATOR}
              component={AddTaskContainer}
            />
            <AppStack.Screen
              name={ERouteNames.TASK_EDITOR}
              component={EditTaskContainer}
            />
          </AppStack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigation;
