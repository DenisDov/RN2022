import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Header } from '../../../components/Header';
import { SettingsItem } from '../../../components/SettingsItem';
import { Box, ScrollBox } from '../../../theme';

type Settings = {
  label: string;
  navTo: string;
};

const ROUTES: Array<Settings> = [
  {
    label: 'App settings',
    navTo: 'AppSettingsScreen',
  },
  {
    label: 'react-native-render-html',
    navTo: 'HTMLScreen',
  },
  {
    label: 'react-native-webview',
    navTo: 'WebViewScreen',
  },
  {
    label: 'image-picker',
    navTo: 'ImagePickerScreen',
  },
  {
    label: 'react-native-video',
    navTo: 'VideoScreen',
  },
  {
    label: 'react-native-youtube-iframe',
    navTo: 'YoutubeScreen',
  },
  {
    label: 'react-native-vimeo-iframe',
    navTo: 'VimeoScreen',
  },
];

const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="SettingsStack" noBack />
      <ScrollBox flex={1}>
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
    </Box>
  );
};

export default SettingsScreen;
