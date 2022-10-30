import { View, Text } from 'react-native';
import React from 'react';

const Button = () => {
  return (
    <View>
      <Text onPress={() => console.log('PRESSED')}>Button</Text>
    </View>
  );
};

export { Button };
