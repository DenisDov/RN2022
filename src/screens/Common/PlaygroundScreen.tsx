import React from 'react';
import { StyleSheet } from 'react-native';

import { OutlineButton, PrimaryButton } from '../../components/Button';
import { Header } from '../../components/Header';
import { Box, Card, ScrollBox, Text, theme } from '../../theme';

const PlaygroundScreen = () => {
  return (
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="Playground" />
      <ScrollBox flex={1} contentContainerStyle={styles.scrollContent}>
        {/* Colors */}
        <Text variant="title">Colors</Text>
        <Box flexDirection="row" flexWrap="wrap">
          {Object.keys(theme.colors).map((key: any) => {
            return (
              <Box key={key} flexGrow={1} marginRight="s">
                <Text>{key}</Text>
                <Box
                  height={44}
                  backgroundColor={key}
                  borderRadius="s"
                  borderWidth={1}
                />
              </Box>
            );
          })}
        </Box>
        <Box height={16} />
        {/* Typography */}
        <Text variant="title">Typography</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          reiciendis.
        </Text>

        <Box height={16} />
        {/* Card */}
        <Text variant="title">Card</Text>
        <Card variant="main" padding="m">
          <Text variant="title">Card have default shadow</Text>
          <Text>text</Text>
        </Card>
        <Box height={16} />

        {/* Buttons */}
        <Text variant="title">Buttons</Text>
        <PrimaryButton label="Primary button" onPress={() => null} />
        <Box height={16} />
        <OutlineButton label="Outline button" onPress={() => null} />
      </ScrollBox>
    </Box>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    padding: theme.spacing.m,
  },
});

export default PlaygroundScreen;
