import React from 'react';

import { BSheet } from '../../../components/BottomSheet';
import { Header } from '../../../components/Header';
import { Box, Text } from '../../../theme';

const ProfileScreen = () => {
  return (
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="Profile" />
      <Box padding="m">
        <Text variant="title">Profile{'\n'}screen</Text>
      </Box>
      <BSheet />
    </Box>
  );
};

export default ProfileScreen;
