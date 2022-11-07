import React from 'react';
import { ScrollBox, Box, Text } from '@theme';

const Playground = () => {
  return (
    <ScrollBox flexGrow={1} showsVerticalScrollIndicator={false}>
      <Box padding="m">
        <Text variant="header">FAQ</Text>
      </Box>
    </ScrollBox>
  );
};

export default Playground;
