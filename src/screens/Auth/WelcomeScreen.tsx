import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Box, Text } from '@theme';
import { Images } from '@assets';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={Images.unsplash}
      style={styles.bg}
      resizeMode="cover">
      <Box paddingHorizontal="m" paddingBottom="l" paddingTop="xxl">
        <LinearGradient
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
        />
        <Text variant="header">Adventures await!</Text>
        <Text marginVertical="l">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
          mollitia?
        </Text>
        <Button
          text="Get started"
          onPress={() => navigation.navigate('Register')}
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
});

export default WelcomeScreen;
