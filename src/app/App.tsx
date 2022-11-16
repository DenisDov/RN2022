import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
// import { useNetInfo } from '@react-native-community/netinfo';
import FlashMessage from 'react-native-flash-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { theme } from '../theme';
import AppNavigator from './Navigation';
import { persistor, store } from './store';

// import { useNetworkStatus } from '../hooks/useNetworkStatus';

const App = () => {
  // const netInfo = useNetInfo();
  // console.log('netInfo: ', netInfo);

  return (
    <GestureHandlerRootView style={styles.root}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <StatusBar barStyle="dark-content" backgroundColor="black" />
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
              <AppNavigator />
            </SafeAreaProvider>
            <FlashMessage position="bottom" />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
