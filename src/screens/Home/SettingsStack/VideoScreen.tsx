import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import VideoPlayer from 'react-native-media-console';
import Video from 'react-native-video';

// import Video from 'react-native-video';
import { Box, Text } from '../../../theme';

const VideoScreen = props => {
  const [error, setError] = useState('');
  // const videoRef = useRef<Video>(null);

  const videoError = ({ error: { localizedDescription } }: string) => {
    setError(localizedDescription);
  };
  return (
    <Box flex={1} backgroundColor="background" padding="m">
      <Box height={250}>
        {/* <VideoPlayer
        source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
        navigator={props.navigation}
        // style={styles.backgroundVideo}
      /> */}
        {/* <Video
        // ref={videoRef}
        source={{
          uri: 'https://file-examples.com/storage/fe7589721d63762859d6962/2017/04/file_example_MP4_1920_18MG.mp4',
        }}
        onError={videoError}
        style={styles.backgroundVideo}
        repeat
      /> */}
        <Video
          source={{
            uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          style={styles.video}
          controls={true}
          resizeMode="cover"
          hideShutterView={true}
          paused={true}
        />
        {error && <Text>{error}</Text>}
      </Box>
    </Box>
  );
};

var styles = StyleSheet.create({
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
