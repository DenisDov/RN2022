import { View, Text } from 'react-native';
import React from 'react';

type Props = {
  onPress: () => void;
};

const Button = ({ onPress }: Props) => {
  return (
    <View>
      <Text onPress={onPress}>Button</Text>
    </View>
  );
};

export { Button };
