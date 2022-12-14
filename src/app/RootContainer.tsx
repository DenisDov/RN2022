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
import { ModalfyActionSheet } from '../components/Modals/ModalfyActionSheet';
import { selectThemeMode } from '../features/auth/authSlice';
import { useAppSelector } from '../hooks/store';
import { darkTheme, theme } from '../theme';
import RootNavigator from './RootNavigator';

const modalConfig = {
  ConfirmModal,
  ModalfyActionSheet,
};
const defaultOptions = { backdropOpacity: 0.6 };
const stack = createModalStack(modalConfig, defaultOptions);

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
            <RootNavigator />
          </BottomSheetModalProvider>
        </ModalProvider>
      </SafeAreaProvider>
      <FlashMessage position="bottom" />
    </ThemeProvider>
  );
};

export default RootContainer;
