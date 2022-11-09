import React from 'react';
import { theme, Box, Text } from '@theme';

const PlaygroundScreen = () => {
  return (
    <Box flex={1} backgroundColor="background">
      <Box flexDirection="row" flexWrap="wrap" margin="m">
        {Object.keys(theme.colors).map(key => {
          return (
            <Box key={key} width={'33%'}>
              <Text>{key}</Text>
              <Box
                // width={70}
                height={88}
                backgroundColor={key}
                borderRadius="s"
                borderWidth={1}
              />
            </Box>
          );
        })}
      </Box>
      <Box margin="m">
        <Text variant="title">Title</Text>
        <Text>regular text</Text>
        <Box backgroundColor="secondary">
          <Text variant="whiteTitle">WhiteTitle</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default PlaygroundScreen;
