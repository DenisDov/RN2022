import React from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import { Box, RectButtonBox, Text } from '../../theme';

type Props = {
  onPress: () => void;
  label: string;
};

const hapticOptions = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

function SettingsItem({ onPress, label }: Props) {
  const handlePress = () => {
    ReactNativeHapticFeedback.trigger('impactLight', hapticOptions);
    onPress();
  };
  return (
    <RectButtonBox
      onPress={handlePress}
      marginBottom="xs"
      padding="m"
      backgroundColor="main"
      borderRadius="s"
      flexDirection="row"
      alignItems="center"
      justifyContent="center">
      <Box flex={1}>
        <Text color="secondaryTextColor">{label}</Text>
      </Box>
      <Box
        width={10}
        height={10}
        borderTopWidth={2}
        borderRightWidth={2}
        borderColor="light"
        style={{
          transform: [
            {
              rotate: '45deg',
            },
          ],
        }}
      />
    </RectButtonBox>
  );
}

export { SettingsItem };
