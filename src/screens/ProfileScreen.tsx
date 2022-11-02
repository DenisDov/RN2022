import React from 'react';
import { Box, Text } from '../theme';

const ProfileScreen = ({ route }) => {
  return (
    <Box backgroundColor="background" padding="m" flex={1}>
      <Text>This is the profile screen of the app</Text>
      <Text>{route.name}</Text>
      <Box width={70} height={70} backgroundColor="card" borderRadius="s" />
      <Box width={70} height={70} backgroundColor="main" borderRadius="s" />
      <Box
        width={70}
        height={70}
        backgroundColor="secondary"
        borderRadius="s"
      />
      <Box width={70} height={70} backgroundColor="dark" borderRadius="s" />
    </Box>
  );
};

export default ProfileScreen;
