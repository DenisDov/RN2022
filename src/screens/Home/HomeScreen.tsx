import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Box, Text } from '@theme';

import { Button } from '../../components/Button';
import { Hamburger } from '../../components/Icons/Hamburger';
import { Counter } from '../../features/counter/Counter';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Box padding="m" flex={1}>
      <Text variant="header">Raleway</Text>
      <Text>Whereas recognition of the inherent dignity</Text>

      <Box>
        <Button onPress={() => navigation.navigate('Profile')}>
          <Text>Go to profile</Text>
        </Button>
      </Box>

      <Counter />

      <Box>
        <Button onPress={() => navigation.navigate('Products')}>
          <Text>Go to products</Text>
        </Button>
      </Box>

      <Hamburger color="red" />
    </Box>
  );
};

export default HomeScreen;
