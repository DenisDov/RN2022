import React from 'react';
import { Box, Text, Card } from '@theme';

//redux start
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { getCounterSelector, decrement, increment } from './counterSlice';
//redux end

import { Button } from '../../components/Button';

const Counter = () => {
  const count = useAppSelector(getCounterSelector);
  const dispatch = useAppDispatch();
  return (
    <Card variant="elevated" padding="m" marginVertical="m">
      <Text variant="title" color="secondaryTextColor" marginBottom="s">
        Conter: {count}
      </Text>
      <Box flexDirection="row" justifyContent="space-between">
        <Box flex={1}>
          <Button onPress={() => dispatch(decrement())} text="decrement" />
        </Box>
        <Box marginHorizontal="s" />
        <Box flex={1}>
          <Button onPress={() => dispatch(increment())} text="increment" />
        </Box>
      </Box>
    </Card>
  );
};

export { Counter };
