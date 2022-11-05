import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { theme } from '../../theme';

type ButtonProps = {
  onPress?: () => void;
  loading?: boolean;
  children: React.ReactNode;
};

const Button = ({ onPress, loading, children }: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={loading}
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? theme.colors.secondary
            : theme.colors.background,
        },
        styles.button,
      ]}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: theme.borderRadii.s,
    padding: theme.spacing.s,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: theme.colors.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export { Button };
