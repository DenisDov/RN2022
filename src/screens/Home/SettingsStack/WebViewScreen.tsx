import React from 'react';
import { WebView } from 'react-native-webview';

import { Header } from '../../../components/Header';
import { ProgressBar } from '../../../components/ProgressBar';
import { Box } from '../../../theme';

const WebViewScreen = () => {
  return (
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="WebView" />
      <WebView
        source={{ uri: 'https://denisdov.github.io' }}
        startInLoadingState
        onError={() => null}
        renderLoading={() => (
          <Box position="absolute" left={0} right={0}>
            <ProgressBar indeterminate />
          </Box>
        )}
      />
    </Box>
  );
};

export default WebViewScreen;
