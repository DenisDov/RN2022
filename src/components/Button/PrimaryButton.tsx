import React from 'react';

import { RectBox, Text } from '../../theme';
import { ActivityIndicator } from '../ActivityIndicator';

type Props = {
  onPress: () => void;
  label: string;
  isLoading?: boolean;
};

const PrimaryButton = ({ onPress, label, isLoading }: Props) => {
  return (
    <RectBox
      onPress={onPress}
      enabled={!isLoading}
      height={40}
      justifyContent="center"
      alignItems="center"
      borderRadius="s"
      backgroundColor="main"
      shadowColor="shadow"
      shadowOpacity={0.25}
      shadowOffset={{ width: 2, height: 2 }}
      shadowRadius={2}
      elevation={2}>
      {isLoading ? (
        <ActivityIndicator color="main" />
      ) : (
        <Text color="primaryButtonText">{label}</Text>
      )}
    </RectBox>
  );
};

export default PrimaryButton;
