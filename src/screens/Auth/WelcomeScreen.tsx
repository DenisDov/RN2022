import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Box, Text } from '@theme';
import { Images } from '@assets';
import { AppButton } from '../../components/Button';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={Images.unsplash}
      style={styles.bg}
      resizeMode="cover">
      <Box
        paddingHorizontal="m"
        paddingVertical="l"
        backgroundColor="background">
        <Text variant="header">Adventures await!</Text>
        <Text marginVertical="l">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
          mollitia?
        </Text>
        <AppButton
          text="Get started"
          onPress={() => console.log('WELCOME PRESS')}
        />
      </Box>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  white: {
    color: '#ffffff',
  },
});

export default WelcomeScreen;
