import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Box, Text, theme } from '../../theme';
import { ActivityIndicator } from '../ActivityIndicator';

type Props = {
  onPress: () => void;
  text: string;
  isLoading?: boolean;
  type?: 'primary' | 'outline';
};

// RectButton from react-native-gesture-handler has no border styling for Android, so we need wrap ReactButton in View
const Button = ({ onPress, text, isLoading, type = 'primary' }: Props) => {
  return (
    <Box
      style={[styles.container, type === 'outline' && styles.outlineContainer]}>
      <RectButton
        onPress={onPress}
        style={[
          styles.button,
          type === 'primary' && styles.primaryButton,
          type === 'outline' && styles.outlineButton,
        ]}
        enabled={!isLoading}>
        {isLoading ? (
          <ActivityIndicator color="main" />
        ) : (
          <Text
            style={[
              styles.buttonText,
              type === 'outline' && styles.outlineTextColor,
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
  outlineContainer: {
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
    backgroundColor: theme.colors.main,
    shadowColor: theme.colors.shadow,
    shadowOpacity: 0.5,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    elevation: 2,
  },
  buttonText: {
    color: theme.colors.buttonText,
  },
  outlineButton: {
    shadowOpacity: 0,
    elevation: 0,
    backgroundColor: 'transparent',
  },
  outlineTextColor: {
    color: theme.colors.outlineButtonText,
  },
});

export { Button };
