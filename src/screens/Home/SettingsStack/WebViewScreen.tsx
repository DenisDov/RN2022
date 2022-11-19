import React from 'react';
import { WebView } from 'react-native-webview';

import { ProgressBar } from '../../../components/ProgressBar';

const WebViewScreen = () => {
  return (
    <WebView
      source={{ uri: 'https://infinite.red' }}
      startInLoadingState
      onError={() => null}
      renderLoading={() => (
        <ProgressBar
          indeterminate
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            // right: 0,
            // zIndex: 1,
          }}
        />
      )}
    />
  );
};

export default WebViewScreen;
