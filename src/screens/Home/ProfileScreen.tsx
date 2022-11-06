import React from 'react';
import { theme, Box, Text } from '@theme';

const ProfileScreen = () => {
  return (
    <Box padding="m" flex={1}>
      <Box flexDirection="row" flexWrap="wrap">
        {Object.keys(theme.colors).map(key => {
          return (
            <Box key={key} width={'33%'}>
              <Text>{key}</Text>
              <Box
                width={70}
                height={70}
                backgroundColor={key}
                borderRadius="s"
                borderWidth={1}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ProfileScreen;
