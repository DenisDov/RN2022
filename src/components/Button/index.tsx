import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Text, theme } from '../../theme';
import { ActivityIndicator } from '../ActivityIndicator';

type Props = {
  onPress: () => void;
  text: string;
  isLoading?: boolean;
  outline?: boolean;
};

const Button = ({ onPress, text, isLoading, outline }: Props) => {
  return (
    <RectButton
      onPress={onPress}
      style={[styles.primaryButton, outline && styles.outlineButton]}
      enabled={!isLoading}>
      {isLoading ? (
        <ActivityIndicator
          color={outline ? theme.colors.main : theme.colors.light}
        />
      ) : (
        <Text
          style={[styles.primaryTextColor, outline && styles.outlineTextColor]}>
          {text}
        </Text>
      )}
    </RectButton>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    height: theme.spacing.xl,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.borderRadii.s,
    backgroundColor: theme.colors.secondary,
    shadowColor: theme.colors.main,
    shadowOpacity: 0.5,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
    elevation: 5,
  },
  primaryTextColor: {
    color: theme.colors.light,
  },
  outlineButton: {
    shadowOpacity: 0,
    backgroundColor: theme.colors.light,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.main,
  },
  outlineTextColor: {
    color: theme.colors.main,
  },
});

export { Button };
