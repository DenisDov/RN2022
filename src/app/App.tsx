import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ModalProvider, createModalStack } from 'react-native-modalfy';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ConfirmModal } from '../components/Modals/ConfirmModal';
import { theme } from '../theme';
import AppNavigator from './Navigation';
import { persistor, store } from './store';

const modalConfig = { ConfirmModal };
const defaultOptions = { backdropOpacity: 0.6 };
const stack = createModalStack(modalConfig, defaultOptions);

const App = () => {
  return (
    <GestureHandlerRootView style={styles.root}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <StatusBar barStyle="dark-content" backgroundColor="black" />
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
              <ModalProvider stack={stack}>
                <AppNavigator />
              </ModalProvider>
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
