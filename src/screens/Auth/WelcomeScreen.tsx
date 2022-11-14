import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ImageBackgroundBox, Box, Text, SafeAreaBox } from '../../theme';
import { Images } from '../../assets';
import { Button } from '../../components/Button';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackgroundBox flex={1} source={Images.unsplash} resizeMode="cover">
      <SafeAreaBox flex={1} padding="m">
        <Box flex={1}>
          <Text variant="title">Adventures await!</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
            mollitia?
          </Text>
        </Box>

        <Button
          text="❖ Get started ❖"
          onPress={() => navigation.navigate('Login')}
        />
      </SafeAreaBox>
    </ImageBackgroundBox>
  );
};

export default WelcomeScreen;
