import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchBox, Text } from '@theme';
// import { RectButton } from 'react-native-gesture-handler';
import { theme } from '@theme';

type Props = {
  onPress: () => void;
  text: string;
};

const Button = ({ onPress, text }: Props) => {
  return (
    <TouchBox onPress={onPress} style={styles.button}>
      <Text color="secondaryTextColor">{text}</Text>
    </TouchBox>
  );
};

const styles = StyleSheet.create({
  button: {
    // flexGrow: 1,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: theme.colors.secondary,
    shadowColor: theme.colors.main,
    shadowOpacity: 0.5,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
    elevation: 5,
  },
});

export { Button };
