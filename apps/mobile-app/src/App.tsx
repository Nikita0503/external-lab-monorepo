/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import BackButtonSvgImage from './assets/icons/BackButtonSvgImage';
import TaskActiveSvgImage from './assets/icons/TaskActiveSvgImage';
import TaskCompletedSvgImage from './assets/icons/TaskCompletedSvgImage';
import { COLORS } from './theme/colors';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <TaskCompletedSvgImage />
      <TaskActiveSvgImage />
      <BackButtonSvgImage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black,
  },
});

export default App;
