import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { SettingsItem } from '../../../components/SettingsItem';
import { Box, ScrollBox } from '../../../theme';

const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollBox flex={1} backgroundColor="background">
      <Box padding="m">
        <SettingsItem
          label="react-native-render-html"
          onPress={() => navigation.navigate('HTMLScreen')}
        />
        <SettingsItem
          label="react-native-video"
          onPress={() => navigation.navigate('VideoScreen')}
        />
      </Box>
    </ScrollBox>
  );
};

export default SettingsScreen;
