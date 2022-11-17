import React from 'react';
import { StyleSheet } from 'react-native';

import { Box, RectButtonBox, ScrollBox, Text, theme } from '../../theme';

const SettingsScreen = () => {
  return (
    <ScrollBox
      flex={1}
      backgroundColor="background"
      contentContainerStyle={styles.scrollView}>
      <RectButtonBox
        padding="m"
        backgroundColor="main"
        borderRadius="s"
        flexDirection="row"
        alignItems="center"
        justifyContent="center">
        <Box flex={1}>
          <Text color="secondaryTextColor">react-native-render-html</Text>
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
    </ScrollBox>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: theme.spacing.m,
  },
});

export default SettingsScreen;
