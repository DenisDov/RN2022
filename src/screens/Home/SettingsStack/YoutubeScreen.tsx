import React, { useCallback, useState } from 'react';
import { Alert, Button } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

import { Header } from '../../../components/Header';
import { Box } from '../../../theme';

export default function App() {
  const [playing, setPlaying] = useState(false);
  const onStateChange = useCallback((event: string) => {
    if (event === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  return (
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="YoutubePlayer" />
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={'iee2TATGMyI'}
        onChangeState={onStateChange}
      />
      <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} />
    </Box>
  );
}
