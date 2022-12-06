import React from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import { Box, RectBox, Text } from '../../theme';

type Props = {
  onPress: () => void;
  label: string;
  children: React.ReactNode;
};

const hapticOptions = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

function SettingsItem({ onPress, label, children }: Props) {
  const handlePress = () => {
    ReactNativeHapticFeedback.trigger('impactLight', hapticOptions);
    onPress();
  };
  return (
    <RectBox
      onPress={handlePress}
      marginBottom="xs"
      padding="m"
      backgroundColor="background"
      borderRadius="s"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      shadowColor="shadow"
      shadowOpacity={0.25}
      shadowOffset={{ width: 2, height: 2 }}
      shadowRadius={2}
      elevation={2}>
      <Box flex={1}>
        <Text>{label}</Text>
      </Box>
      {children}
    </RectBox>
  );
}

export { SettingsItem };
