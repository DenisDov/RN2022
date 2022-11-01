import React from 'react';

//redux start
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { getCounterSelector, decrement, increment } from './counterSlice';
//redux end

import { Box, Text, Card } from '../../theme';
import { Button } from '../../components/Button';

const Counter = () => {
  const count = useAppSelector(getCounterSelector);
  const dispatch = useAppDispatch();
  return (
    <Card padding="m" marginVertical="m">
      <Text variant="header">Conter: {count}</Text>
      <Box flexDirection="row" justifyContent="space-between">
        <Button onPress={() => dispatch(increment())}>
          <Text>increment</Text>
        </Button>
        <Box marginHorizontal="s" />
        <Button onPress={() => dispatch(decrement())}>
          <Text>decrement</Text>
        </Button>
      </Box>
    </Card>
  );
};

export { Counter };
