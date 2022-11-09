import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Box, Text } from '@theme';

import { Button } from '../../components/Button';
import { Hamburger } from '../../components/Icons/Hamburger';
import { Counter } from '../../features/counter/Counter';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Box padding="m" flex={1} backgroundColor="background">
      <Text variant="header">Raleway</Text>
      <Text>Whereas recognition of the inherent dignity</Text>

      <Button
        text="Go to profile"
        onPress={() => navigation.navigate('Profile')}
      />

      <Counter />

      <Button
        text="Go to products"
        onPress={() => navigation.navigate('Products')}
      />

      <Hamburger color="red" />
    </Box>
  );
};

export default HomeScreen;
