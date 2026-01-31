import store from '@external-lab-monorepo/store';
import { SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { DevMenuProvider } from './contexts/DevMenuContext';
import AppNavigation from './navigation';
import styles from './styles';
enableScreens(false);

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <GestureHandlerRootView style={styles.container}>
        <Provider store={store}>
          <DevMenuProvider>
            <AppNavigation />
          </DevMenuProvider>
        </Provider>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default App;
