import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Box, Text, theme } from '../../theme';
import { ActivityIndicator } from '../ActivityIndicator';

type Props = {
  onPress: () => void;
  text: string;
  isLoading?: boolean;
  primary?: boolean;
  outline?: boolean;
};

// RectButton from react-native-gesture-handler has no border styling for Android, so we need wrap ReactButton in View
const Button = ({ onPress, text, isLoading, primary, outline }: Props) => {
  return (
    <Box style={[styles.container, outline && styles.outlineContiner]}>
      <RectButton
        onPress={onPress}
        style={[
          styles.button,
          primary && styles.primaryButton,
          outline && styles.outlineButton,
        ]}
        enabled={!isLoading}>
        {isLoading ? (
          <ActivityIndicator
            color={outline ? theme.colors.main : theme.colors.light}
          />
        ) : (
          <Text
            style={[
              styles.primaryTextColor,
              outline && styles.outlineTextColor,
            ]}>
            {text}
          </Text>
        )}
      </RectButton>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    height: theme.spacing.xl,
    borderRadius: theme.borderRadii.s,
  },
  outlineContiner: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.main,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.borderRadii.s,
  },
  primaryButton: {
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
    elevation: 0,
    backgroundColor: 'transparent',
  },
  outlineTextColor: {
    color: theme.colors.main,
  },
});

export { Button };
