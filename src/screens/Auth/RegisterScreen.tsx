import React from 'react';
import { SafeAreaBox, Box, Text } from '@theme';
import { AppButton } from '../../components/Button/RectButton';

const RegisterScreen = () => {
  return (
    <SafeAreaBox flex={1}>
      <Box
        flex={1}
        backgroundColor="background"
        padding="m"
        // marginTop="xl"
        borderTopLeftRadius="l"
        borderTopRightRadius="l">
        <Text>RegisterScreen</Text>
        <AppButton text="👉 Rect button" />
      </Box>
    </SafeAreaBox>
  );
};

export default RegisterScreen;
