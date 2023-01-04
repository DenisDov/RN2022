import { useTheme } from '@shopify/restyle';
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

type Props = {
  onBlur: () => void;
  onChange: () => void;
  value: string;
  placeholder: string;
};

const AuthInput = ({ onBlur, onChange, value, placeholder }: Props) => {
  const appTheme = useTheme();
  const styles = StyleSheet.create({
    input: {
      marginBottom: appTheme.spacing.xs,
      fontSize: 18,
      fontFamily: 'Raleway-Regular',
      color: appTheme.colors.primaryText,
      height: appTheme.spacing.xl,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: appTheme.colors.main,
    },
  });
  return (
    <TextInput
      onBlur={onBlur}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={appTheme.colors.inputPlaceholder}
      underlineColorAndroid="transparent"
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.input}
    />
  );
};

export { AuthInput };
