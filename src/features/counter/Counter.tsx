import React from 'react';

import { PrimaryButton } from '../../components/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { Box, Card, Text } from '../../theme';
import { decrement, getCounterSelector, increment } from './counterSlice';

const Counter = () => {
  const count = useAppSelector(getCounterSelector);
  const dispatch = useAppDispatch();
  return (
    <Card variant="main" marginVertical="m" padding="m">
      <Text variant="title" marginBottom="s">
        Conter: {count}
      </Text>
      <Box flexDirection="row" justifyContent="space-between">
        <Box flex={1}>
          <PrimaryButton
            onPress={() => dispatch(decrement())}
            label="decrement"
          />
        </Box>
        <Box marginHorizontal="s" />
        <Box flex={1}>
          <PrimaryButton
            onPress={() => dispatch(increment())}
            label="increment"
          />
        </Box>
      </Box>
    </Card>
  );
};

export { Counter };
