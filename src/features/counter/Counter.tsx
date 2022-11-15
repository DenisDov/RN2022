import React from 'react';

import { Button } from '../../components/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { Box, Card, Text } from '../../theme';
import { decrement, getCounterSelector, increment } from './counterSlice';

const Counter = () => {
  const count = useAppSelector(getCounterSelector);
  const dispatch = useAppDispatch();
  return (
    <Card marginVertical="m">
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
