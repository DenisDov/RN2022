import React, { useRef } from 'react';
import { Switch } from 'react-native';

import { Header } from '../../../components/Header';
import { SettingsItem } from '../../../components/SettingsItem';
import { selectThemeMode, setDarkMode } from '../../../features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { Box, theme } from '../../../theme';

const AppSettingsScreen = () => {
  const switchEl = useRef(null);
  const isDarkMode = useAppSelector(selectThemeMode);
  const dispatch = useAppDispatch();

  const handleChangeTheme = () => {
    dispatch(setDarkMode(!isDarkMode));
  };

  return (
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="AppSettings" />
      <Box flex={1} padding="m">
        <SettingsItem onPress={handleChangeTheme} label="Dark theme">
          <Switch
            ref={switchEl}
            value={isDarkMode}
            trackColor={{ true: theme.colors.main }}
            onValueChange={handleChangeTheme}
          />
        </SettingsItem>
      </Box>
    </Box>
  );
};

export default AppSettingsScreen;
