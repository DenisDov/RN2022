import React from 'react';
import { ImageBackgroundBox, Box, Text, SafeAreaBox } from '@theme';
import { Images } from '@assets';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackgroundBox flex={1} source={Images.unsplash} resizeMode="cover">
      <SafeAreaBox flex={1} padding="m">
        <Box flex={1}>
          <Text variant="welcomeTitle">Adventures await!</Text>
          <Text variant="welcomeDescription">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
            mollitia?
          </Text>
        </Box>

        <Button
          text="Get started"
          onPress={() => navigation.navigate('Register')}
        />
      </SafeAreaBox>
    </ImageBackgroundBox>
  );
};

export default WelcomeScreen;
