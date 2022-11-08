import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@theme';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '@theme';

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
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: theme.colors.accent,
    // shadowColor: theme.colors.accent,
    // shadowOpacity: 0.5,
    // shadowOffset: { width: 0, height: 5 },
    // shadowRadius: 5,
    // elevation: 5,
  },
});

export { AppButton };
