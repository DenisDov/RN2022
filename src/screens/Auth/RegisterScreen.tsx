import React from 'react';
import { SafeAreaBox, Box, Text } from '@theme';
import { AppButton } from '../../components/Button';

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
        <AppButton
          text="👉 Rect button"
          onPress={() => console.log('REGISTER')}
        />
      </Box>
    </SafeAreaBox>
  );
};

export default RegisterScreen;
