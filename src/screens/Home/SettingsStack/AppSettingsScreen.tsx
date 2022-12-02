import React from 'react';

import { Header } from '../../../components/Header';
import { Box, Text } from '../../../theme';

const AppSettingsScreen = () => {
  return (
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="Image picker" />
      <Box flex={1} padding="m">
        <Text>AppSettingsScreen</Text>
      </Box>
    </Box>
  );
};

export default AppSettingsScreen;
