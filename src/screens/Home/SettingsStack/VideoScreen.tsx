import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Video, { LoadError } from 'react-native-video';

import { Header } from '../../../components/Header';
import { Box, Text } from '../../../theme';

const VideoScreen = () => {
  const [videoError, setVideoError] = useState<string>('');

  const onVideoError = ({ error }: LoadError) => {
    setVideoError(error.errorString);
  };
  return (
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="Video" />
      <Box height={250}>
        <Video
          source={{
            uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          style={styles.video}
          controls={true}
          resizeMode="cover"
          hideShutterView={true}
          onError={onVideoError}
          // paused={true}
        />
        {videoError && <Text>{videoError}</Text>}
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 250,
  },
});

export default VideoScreen;
