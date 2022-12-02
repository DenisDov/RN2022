import React from 'react';

import { BSheet } from '../../../components/BottomSheet';
import { Header } from '../../../components/Header';
import { Box } from '../../../theme';

const ProfileScreen = () => {
  return (
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="Profile" />
      <BSheet />
    </Box>
  );
};

export default ProfileScreen;
