import React from 'react';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

import { Header } from '../../../components/Header';
import { Box } from '../../../theme';

const source = {
  html: `
<p style='text-align:center; color: white'>
  HTML markup here
</p>`,
};

const HTMLScreen = () => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  return (
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="RenderHtml" />
      <RenderHtml contentWidth={SCREEN_WIDTH} source={source} />
    </Box>
  );
};

export default HTMLScreen;
