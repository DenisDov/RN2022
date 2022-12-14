import { useNavigation } from '@react-navigation/native';
import { MotiView, useAnimationState } from 'moti';
import React from 'react';

import { Header } from '../../../components/Header';
import { SettingsItem } from '../../../components/SettingsItem';
import { ArrowRight } from '../../../components/SettingsItem/ArrowRight';
import { Box, ScrollBox } from '../../../theme';

type SettingsItemProps = {
  label: string;
  navTo: any;
};

const ROUTES: Array<SettingsItemProps> = [
  {
    label: 'App settings',
    navTo: 'AppSettingsScreen',
  },
  {
    label: 'Action Sheets',
    navTo: 'ActionSheetsScreen',
  },
  {
    label: 'moti',
    navTo: 'MotiScreen',
  },
  {
    label: 'Accordion reanimated',
    navTo: 'AccordionScreen',
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
  {
    label: 'react-native-document-picker',
    navTo: 'DocumentPickerScreen',
  },
];

const SettingsScreen = () => {
  const navigation = useNavigation();
  const animationState = useAnimationState({
    from: {
      opacity: 0,
      translateY: 15,
    },
    to: {
      opacity: 1,
      translateY: 0,
    },
  });
  return (
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="SettingsStack" noBack />
      <ScrollBox flex={1}>
        <MotiView
          state={animationState}
          transition={{
            type: 'timing',
            duration: 300,
          }}>
          <Box padding="m">
            {ROUTES.map(({ label, navTo }: SettingsItemProps) => (
              <SettingsItem
                key={label}
                label={label}
                onPress={() => navigation.navigate(navTo)}>
                <ArrowRight />
              </SettingsItem>
            ))}
          </Box>
        </MotiView>
      </ScrollBox>
    </Box>
  );
};

export default SettingsScreen;
