import React from 'react';

import { Button } from '../../components/Button';
import { Box, Card, ScrollBox, Text, theme } from '../../theme';

const PlaygroundScreen = () => {
  return (
    <ScrollBox
      flex={1}
      backgroundColor="background"
      contentContainerStyle={{ padding: 16 }}>
      {/* Colors */}
      <Text variant="title">Colors</Text>
      <Box flexDirection="row" flexWrap="wrap">
        {Object.keys(theme.colors).map(key => {
          console.log('key: ', key);
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
      <Box backgroundColor="secondary">
        <Text variant="title" color="secondaryTextColor">
          White title
        </Text>
      </Box>
      <Box height={16} />
      {/* Card */}
      <Text variant="title">Card</Text>
      <Card variant="main" padding="m">
        <Text variant="title" color="secondaryTextColor">
          Card have default shadow
        </Text>
        <Text color="secondaryTextColor">white text</Text>
      </Card>
      <Box height={16} />

      {/* Buttons */}
      <Text variant="title">Buttons</Text>
      <Button text="Primary button" onPress={() => null} />
      <Box height={16} />
      <Button
        outline={true}
        // isLoading
        text="Outline button"
        onPress={() => null}
      />
    </ScrollBox>
  );
};

export default PlaygroundScreen;
