import { View, Text } from 'react-native';
import React from 'react';

type Props = {
  onPress: () => void;
  text: string;
};

const Button = ({ onPress, text }: Props) => {
  return (
    <View>
      <Text onPress={onPress}>{text}</Text>
    </View>
  );
};

export { Button };
