import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@theme';
import { RectButton } from 'react-native-gesture-handler';

type Props = {
  text: string;
};

const AppButton = ({ text }: Props) => {
  return (
    <RectButton
      onPress={() => console.log('Rect button press')}
      style={styles.button}>
      <Text>{text}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'green',
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    elevation: 5,
  },
});

export { AppButton };
