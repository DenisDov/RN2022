import React, { useRef } from 'react';
import { Switch, SwitchChangeEvent } from 'react-native';

import { Header } from '../../../components/Header';
import {
  selectCurrentThemeMode,
  setColorScheme,
} from '../../../features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { Box, RectBox, Text } from '../../../theme';

const AppSettingsScreen = () => {
  const switchEl = useRef(null);
  const isDarkMode = useAppSelector(selectCurrentThemeMode);
  const dispatch = useAppDispatch();

  const handleChangeTheme = () => {
    console.log('switchEl: ', switchEl.current);
  };

  return (
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="AppSettings" />
      <Box flex={1} padding="m">
        <RectBox
          onPress={handleChangeTheme}
          marginBottom="xs"
          padding="m"
          backgroundColor="background"
          borderRadius="s"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          shadowColor="shadow"
          shadowOpacity={0.25}
          shadowOffset={{ width: 2, height: 2 }}
          shadowRadius={2}
          elevation={2}>
          <Box flex={1}>
            <Text>Dark theme</Text>
          </Box>
          <Switch
            ref={switchEl}
            value={isDarkMode}
            trackColor={{ true: '#5065ED' }}
            onValueChange={(_: boolean) =>
              dispatch(setColorScheme(!isDarkMode))
            }
          />
        </RectBox>
      </Box>
    </Box>
  );
};

export default AppSettingsScreen;
