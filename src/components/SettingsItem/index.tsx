import React from 'react';
import { StyleSheet } from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import { Box, RectBox, Text } from '../../theme';

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
      <Box
        width={10}
        height={10}
        borderTopWidth={1}
        borderRightWidth={1}
        borderColor="primaryText"
        style={styles.arrowRight}
      />
    </RectBox>
  );
}

const styles = StyleSheet.create({
  arrowRight: {
    transform: [
      {
        rotate: '45deg',
      },
    ],
  },
});

export { SettingsItem };
