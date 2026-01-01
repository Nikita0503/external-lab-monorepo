/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import CommonTasksScreenTabActive from './assets/icons/tabs/CommonTasksScreenTabActive';
import ProfileScreenTabActive from './assets/icons/tabs/ProfileScreenTabActive';
import TasksScreenTabActive from './assets/icons/tabs/TasksScreenTabActive';
import { COLORS } from './theme/colors';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <CommonTasksScreenTabActive />
      <ProfileScreenTabActive />
      <TasksScreenTabActive />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
});

export default App;
