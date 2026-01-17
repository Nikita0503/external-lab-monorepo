import { Platform, StatusBar, StyleSheet } from 'react-native';
import { COLORS } from './theme/colors';

let statusBarHeight = StatusBar.currentHeight;
if (statusBarHeight === undefined || statusBarHeight === 0) {
  statusBarHeight = 50;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.violet,
  },
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.violet,
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 0,
  },
});

export default styles;
