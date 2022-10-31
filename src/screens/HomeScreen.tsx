import React from 'react';
import { Box, Text } from '../theme';
import { Button } from '../components/Button';

const HomeScreen = ({ navigation }) => {
  return (
    <Box backgroundColor="mainBackground" padding="m" flex={1}>
      <Text variant="header">Raleway</Text>
      <Text>Whereas recognition of the inherent dignity</Text>
      <Button onPress={() => navigation.navigate('Profile')} />
    </Box>
  );
};

export default HomeScreen;
