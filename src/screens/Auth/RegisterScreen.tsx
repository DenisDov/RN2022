import React from 'react';
import { SafeAreaBox, Box, Text } from '@theme';
import { Button } from '../../components/Button';

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
        <Button text="👉 Rect button" onPress={() => console.log('REGISTER')} />
      </Box>
    </SafeAreaBox>
  );
};

export default RegisterScreen;
