import React, { useCallback, useState } from 'react';
import { Alert, Button } from 'react-native';
import YoutubePlayer, { PLAYER_STATES } from 'react-native-youtube-iframe';

import { Box } from '../../../theme';

export default function App() {
  const [playing, setPlaying] = useState(false);
  // FIXME: fix enum type
  const onStateChange = useCallback((state: PLAYER_STATES) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  return (
    <Box>
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
