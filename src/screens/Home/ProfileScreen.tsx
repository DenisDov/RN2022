import React from 'react';
import { Box, Text } from '../../theme';
import { BSheet } from '../../components/BottomSheet';

const ProfileScreen = () => {
  return (
    <Box flex={1} backgroundColor="background">
      <Text>Profile</Text>
      <BSheet />
    </Box>
  );
};

export default ProfileScreen;
