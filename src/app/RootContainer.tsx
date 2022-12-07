import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import { StatusBar } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { ModalProvider, createModalStack } from 'react-native-modalfy';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

import { ConfirmModal } from '../components/Modals/ConfirmModal';
import { selectThemeMode } from '../features/auth/authSlice';
import { useAppSelector } from '../hooks/store';
import { darkTheme, theme } from '../theme';
import AppNavigator from './Navigation';

const modalConfig = { ConfirmModal };
const stack = createModalStack(modalConfig);

const RootContainer = () => {
  const isDarkMode = useAppSelector(selectThemeMode);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.statusBar} //for android only
      />
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <ModalProvider stack={stack}>
          <BottomSheetModalProvider>
            <AppNavigator />
          </BottomSheetModalProvider>
        </ModalProvider>
      </SafeAreaProvider>
      <FlashMessage position="bottom" />
    </ThemeProvider>
  );
};

export default RootContainer;
