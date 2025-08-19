/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { AUTH_HEADER } from '@external-lab-monorepo/api';
import { SPRINTS } from '@external-lab-monorepo/constants';
import { authReducer } from '@external-lab-monorepo/store';
import { TASK } from '@external-lab-monorepo/types';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>{AUTH_HEADER}</Text>
      <Text>{SPRINTS.SPRINT_3}</Text>
      <Text>{authReducer}</Text>
      <Text>{TASK}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
