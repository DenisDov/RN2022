import React from 'react';
import { StyleSheet } from 'react-native';

import { Box, RectBox, Text } from '../../theme';
import { BUTTON_HEIGHT } from '../../utils/constants';
import { ActivityIndicator } from '../ActivityIndicator';

type Props = {
  onPress: () => void;
  label: string;
  isLoading?: boolean;
};

const OutlineButton = ({ onPress, label, isLoading }: Props) => {
  return (
    <Box
      height={BUTTON_HEIGHT}
      borderRadius="s"
      borderWidth={StyleSheet.hairlineWidth}
      borderColor="main">
      <RectBox
        onPress={onPress}
        enabled={!isLoading}
        flex={1}
        justifyContent="center"
        alignItems="center"
        borderRadius="s">
        {isLoading ? (
          <ActivityIndicator color="#121212" />
        ) : (
          <Text color="outlineButtonText">{label}</Text>
        )}
      </RectBox>
    </Box>
  );
};

export default OutlineButton;
