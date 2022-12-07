import React from 'react';
import { Vimeo } from 'react-native-vimeo-iframe';

import { Header } from '../../../components/Header';
import { Box } from '../../../theme';

const VimeoScreen = () => {
  const videoCallbacks = {
    play: (data: any) => console.warn('play: ', data),
    pause: (data: any) => console.warn('pause: ', data),
    fullscreenchange: (data: any) => console.warn('fullscreenchange: ', data),
    ended: (data: any) => console.warn('ended: ', data),
    controlschange: (data: any) => console.warn('controlschange: ', data),
  };

  return (
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="Vimeo" />
      <Box flex={1}>
        <Vimeo videoId={'712158285'} handlers={videoCallbacks} />
        <Vimeo
          videoId={'712158996'}
          handlers={videoCallbacks}
          params={'muted=1'}
        />
        <Vimeo
          videoId={'712159936'}
          handlers={videoCallbacks}
          params={'api=1&controls=0'}
        />
      </Box>
    </Box>
  );
};

export default VimeoScreen;
