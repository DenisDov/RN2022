import React from 'react';
import { theme, Box, Text, Card } from '@theme';
import { Button } from '../../components/Button';

const PlaygroundScreen = () => {
  return (
    <Box flex={1} backgroundColor="background" margin="m">
      {/* Colors */}
      <Box flexDirection="row" flexWrap="wrap">
        {Object.keys(theme.colors).map(key => {
          return (
            <Box key={key} flexGrow={1} flexBasis={'33%'}>
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
      <Text variant="title">Title</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
        reiciendis.
      </Text>
      <Box backgroundColor="secondary">
        <Text variant="title" color="secondaryTextColor">
          WhiteTitle
        </Text>
      </Box>
      <Box height={16} />
      {/* Card */}
      <Card>
        <Text variant="title" color="secondaryTextColor">
          Card
        </Text>
        <Text color="secondaryTextColor">regular text</Text>
      </Card>
      <Box height={16} />
      {/* Buttons */}
      <Button text="Button" onPress={() => null} />
      <Box height={16} />
      <Button variant="outline" text="Outline Button" onPress={() => null} />
    </Box>
  );
};

export default PlaygroundScreen;
