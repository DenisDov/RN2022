import React from 'react';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

import { Box } from '../../../theme';

const source = {
  html: `
<p style='text-align:center;'>
  Hello World!
</p>`,
};

const HTMLScreen = () => {
  const { width } = useWindowDimensions();
  return (
    <Box flex={1} backgroundColor="surface">
      <RenderHtml contentWidth={width} source={source} />
    </Box>
  );
};

export default HTMLScreen;
