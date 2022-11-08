import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { theme } from '@theme';
import { useTheme } from '@shopify/restyle';

type ButtonProps = {
  onPress?: () => void;
  loading?: boolean;
  children: React.ReactNode;
};

const Button = ({ onPress, loading, children }: ButtonProps) => {
  const theme = useTheme();
  const { accent, main, background } = theme.colors;
  return (
    <Pressable
      onPress={onPress}
      disabled={loading}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? background : main,
        },
        styles.button,
      ]}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexGrow: 1,
    height: 48,
    borderRadius: theme.borderRadii.s,
    padding: theme.spacing.s,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: theme.colors.accent,
    // shadowColor: theme.colors.text,
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
