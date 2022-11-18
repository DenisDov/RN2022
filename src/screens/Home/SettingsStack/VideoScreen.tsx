import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import Video from 'react-native-video';

import { Box, Text } from '../../../theme';

const VideoScreen = () => {
  const [error, setError] = useState('');
  // const videoRef = useRef<Video>(null);

  const videoError = ({ error: { localizedDescription } }: string) => {
    setError(localizedDescription);
  };
  return (
    <Box flex={1} backgroundColor="background" padding="m">
      <Video
        // ref={videoRef}
        source={{
          uri: 'https://file-examples.com/storage/fe7589721d63762859d6962/2017/04/file_example_MP4_1920_18MG.mp4',
        }}
        onError={videoError}
        style={styles.backgroundVideo}
        repeat
      />
      {error && <Text>{error}</Text>}
    </Box>
  );
};

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default VideoScreen;
