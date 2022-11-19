import React from 'react';
import { WebView } from 'react-native-webview';

import { ProgressBar } from '../../../components/ProgressBar';
import { Box } from '../../../theme';

const WebViewScreen = () => {
  return (
    <WebView
      source={{ uri: 'https://infinite.red' }}
      startInLoadingState
      onError={() => null}
      renderLoading={() => (
        <Box position="absolute" left={0} right={0}>
          <ProgressBar indeterminate />
        </Box>
      )}
    />
  );
};

export default WebViewScreen;
