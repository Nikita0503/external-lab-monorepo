import { useAuth } from '@external-lab-monorepo/hooks';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { SCREEN_OPTIONS } from '../constants/navigation';
import { ERouteNames } from '../interfaces/navigation/routeNames';
import {
  AppStackParamList,
  AuthStackParamList,
} from '../interfaces/navigation/routeParams';
import AddTaskScreen from '../screens/app/AddTask';
import EditTaskScreen from '../screens/app/EditTask';
import TaskDetailsScreen from '../screens/app/TaskDetails';
import SignInScreen from '../screens/auth/SignIn';
import SignUpScreen from '../screens/auth/SignUp';
import styles from './AppNavigation.styles';
import Tabs from './Tabs';

const AuthStack = createStackNavigator<AuthStackParamList>();
const AppStack = createStackNavigator<AppStackParamList>();

const AppNavigation = () => {
  const { accessToken } = useAuth();

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <NavigationContainer>
        {!accessToken ? (
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
        ) : (
          <AppStack.Navigator screenOptions={SCREEN_OPTIONS}>
            <AppStack.Screen name={ERouteNames.TABS} component={Tabs} />
            <AppStack.Screen
              name={ERouteNames.TASK_DETAILS}
              component={TaskDetailsScreen}
            />
            <AppStack.Screen
              name={ERouteNames.ADD_TASK}
              component={AddTaskScreen}
            />
            <AppStack.Screen
              name={ERouteNames.EDIT_TASK}
              component={EditTaskScreen}
            />
          </AppStack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigation;
