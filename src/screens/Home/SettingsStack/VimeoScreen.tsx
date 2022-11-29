import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Vimeo } from 'react-native-vimeo-iframe';

const VimeoScreen = () => {
  const videoCallbacks = {
    play: (data: any) => console.warn('play: ', data),
    pause: (data: any) => console.warn('pause: ', data),
    fullscreenchange: (data: any) => console.warn('fullscreenchange: ', data),
    ended: (data: any) => console.warn('ended: ', data),
    controlschange: (data: any) => console.warn('controlschange: ', data),
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>React Native Vimeo Iframe</Text>
        <View style={styles.videosContainer}>
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
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videosContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default VimeoScreen;
