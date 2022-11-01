import React from 'react';

import { Box, Text } from '../theme';
import { Button } from '../components/Button';
import { Hamburger } from '../components/Icons/Hamburger';
import { Counter } from '../features/counter/Counter';

const HomeScreen = ({ navigation }) => {
  return (
    <Box backgroundColor="mainBackground" padding="m" flex={1}>
      <Text variant="header">Raleway</Text>
      <Text>Whereas recognition of the inherent dignity</Text>
      <Button
        onPress={() => navigation.navigate('Profile')}
        text="Go to profile"
      />
      <Counter />
      <Button
        onPress={() => navigation.navigate('Products')}
        text="Go to products"
      />
      <Hamburger color="red" />
    </Box>
  );
};

export default HomeScreen;
