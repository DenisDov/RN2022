import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { SettingsItem } from '../../../components/SettingsItem';
import { Box, ScrollBox } from '../../../theme';

type Settings = {
  label: string;
  navTo: string;
};

const ROUTES: Array<Settings> = [
  {
    label: 'react-native-render-html',
    navTo: 'HTMLScreen',
  },
  {
    label: 'react-native-video',
    navTo: 'VideoScreen',
  },
  {
    label: 'react-native-webview',
    navTo: 'WebViewScreen',
  },
];

const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollBox flex={1} backgroundColor="background">
      <Box padding="m">
        {ROUTES.map(({ label, navTo }) => (
          <SettingsItem
            key={label}
            label={label}
            onPress={() => navigation.navigate(navTo)}
          />
        ))}
      </Box>
    </ScrollBox>
  );
};

export default SettingsScreen;
