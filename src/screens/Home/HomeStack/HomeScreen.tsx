import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Button } from '../../../components/Button';
import { Hamburger } from '../../../components/Icons/Hamburger';
import { Counter } from '../../../features/counter/Counter';
import { Box, Text } from '../../../theme';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Box padding="m" flex={1} backgroundColor="background">
      <Text variant="title">Raleway</Text>
      <Text marginBottom="m">Whereas recognition of the inherent dignity</Text>

      <Button
        text="Playground"
        onPress={() => navigation.navigate('Playground')}
      />

      <Counter />

      <Text marginBottom="m">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        mollitia reprehenderit, molestiae repellendus ipsum quas. Placeat
        laudantium minus iure neque?
      </Text>

      <Button
        text="Go to products"
        onPress={() => navigation.navigate('Products')}
      />
      <Box height={16} />
      <Button
        outline
        text="Go to profile"
        onPress={() => navigation.navigate('Profile')}
      />

      {/* <Hamburger color="red" /> */}
    </Box>
  );
};

export default HomeScreen;