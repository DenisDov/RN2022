import { useTheme } from '@shopify/restyle';
import React from 'react';

import { OutlineButton, PrimaryButton } from '../../components/Button';
import { Header } from '../../components/Header';
import { Box, Card, ScrollBox, Text } from '../../theme';

const PlaygroundScreen = () => {
  const theme = useTheme();
  // console.tron.logImportant(theme.colors);
  return (
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="Playground" />
      <ScrollBox flex={1} contentContainerStyle={{ padding: theme.spacing.m }}>
        {/* Colors */}
        <Text variant="title">Colors</Text>
        <Box flexDirection="row" flexWrap="wrap">
          {Object.keys(theme.colors).map((color: any) => {
            return (
              <Box key={color} flexGrow={1} marginRight="s">
                <Text>{color}</Text>
                <Box
                  height={44}
                  backgroundColor={color}
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

export default PlaygroundScreen;
