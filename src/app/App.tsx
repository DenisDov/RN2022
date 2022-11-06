import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { theme } from '@theme';
import AppNavigator from './Navigation';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <AppNavigator />
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
