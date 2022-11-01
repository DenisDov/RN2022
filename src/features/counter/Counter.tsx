import React from 'react';

//redux start
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { getCounterSelector, decrement, increment } from './counterSlice';
//redux end

import { Box, Text } from '../../theme';
import { Button } from '../../components/Button';

const Counter = () => {
  const count = useAppSelector(getCounterSelector);
  const dispatch = useAppDispatch();
  return (
    <Box>
      <Text variant="header">Conter: {count}</Text>
      <Button onPress={() => dispatch(increment())} text="increment" />
      <Button onPress={() => dispatch(decrement())} text="decrement" />
    </Box>
  );
};

export { Counter };
