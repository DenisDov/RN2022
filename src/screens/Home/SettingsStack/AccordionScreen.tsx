import React from 'react';

import { Header } from '../../../components/Header';
import { Box, Text } from '../../../theme';

const AccordionScreen = () => {
  return (
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="RenderHtml" />
      <Box flex={1} padding="m">
        <Text>AccordionScreen</Text>
      </Box>
    </Box>
  );
};

export default AccordionScreen;
