import React from 'react';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

import { Box, Text } from '../../../theme';

const source = {
  html: `
<p style='text-align:center;'>
  Hello World!
</p>`,
};

const HTMLScreen = () => {
  const { width } = useWindowDimensions();
  return <RenderHtml contentWidth={width} source={source} />;
};

export default HTMLScreen;
