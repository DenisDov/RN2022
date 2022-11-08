import React from 'react';
import { Box, Text, Card } from '@theme';

//redux start
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { getCounterSelector, decrement, increment } from './counterSlice';
//redux end

import { AppButton } from '../../components/Button';

const Counter = () => {
  const count = useAppSelector(getCounterSelector);
  const dispatch = useAppDispatch();
  return (
    <Card padding="m" marginVertical="m">
      <Text variant="header" marginBottom="s">
        Conter: {count}
      </Text>
      <Box flexDirection="row" justifyContent="space-between">
        <AppButton onPress={() => dispatch(decrement())} text="decrement" />
        <Box marginHorizontal="s" />
        <AppButton onPress={() => dispatch(increment())} text="increment" />
      </Box>
    </Card>
  );
};

export { Counter };
