import React from 'react';

import { BSheet } from '../../components/BottomSheet';
import { Box, Text } from '../../theme';

const ProfileScreen = () => {
  return (
    <Box flex={1} backgroundColor="background">
      <Text>Profile</Text>
      <BSheet />
    </Box>
  );
};

export default ProfileScreen;
