import { useAuth } from '@external-lab-monorepo/hooks';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './AppNavigation.styles';
import AppStackNavigator from './stackNavigators/AppStackNavigator';
import AuthStackNavigator from './stackNavigators/AuthStackNavigator';

const AppNavigation = () => {
  const { accessToken } = useAuth();

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <NavigationContainer>
        {!accessToken ? <AuthStackNavigator /> : <AppStackNavigator />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigation;
