import { MotiView } from 'moti';
import React from 'react';

import { Header } from '../../../components/Header';
import { Box, Text } from '../../../theme';

const MotiScreen = () => {
  return (
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="MotiScreen" />
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'timing' }}>
        <Text>MOTI</Text>
      </MotiView>
    </Box>
  );
};

export default MotiScreen;
