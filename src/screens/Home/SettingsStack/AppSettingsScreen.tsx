import React from 'react';

import { AnimatedSwitch } from '../../../components/AnimatedSwitch/AnimatedSwitch';
import { Header } from '../../../components/Header';
import { SettingsItem } from '../../../components/SettingsItem';
import { selectThemeMode, setDarkMode } from '../../../features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { Box } from '../../../theme';

const AppSettingsScreen = () => {
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
          <AnimatedSwitch
            size={40}
            isActive={isDarkMode}
            onPress={handleChangeTheme}
          />
        </SettingsItem>
      </Box>
    </Box>
  );
};

export default AppSettingsScreen;
