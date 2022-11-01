import React from 'react';

import { Box, Text } from '../theme';
import { Button } from '../components/Button';
import { Hamburger } from '../components/Icons/Hamburger';

//redux start
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import {
  getCounterSelector,
  decrement,
  increment,
} from '../redux/slices/counterSlice';
//redux end

const HomeScreen = ({ navigation }) => {
  const count = useAppSelector(getCounterSelector);
  const dispatch = useAppDispatch();
  return (
    <Box backgroundColor="mainBackground" padding="m" flex={1}>
      <Text variant="header">Raleway</Text>
      <Text>Whereas recognition of the inherent dignity</Text>
      <Button
        onPress={() => navigation.navigate('Profile')}
        text="Go to profile"
      />
      <Text variant="header">Conter: {count}</Text>
      <Button onPress={() => dispatch(increment())} text="increment" />
      <Button onPress={() => dispatch(decrement())} text="decrement" />
      <Button
        onPress={() => navigation.navigate('Products')}
        text="Go to products"
      />
      <Hamburger color="red" />
    </Box>
  );
};

export default HomeScreen;
