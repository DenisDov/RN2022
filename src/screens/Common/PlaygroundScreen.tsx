import React from 'react';
import { theme, Box, Text, Card, ScrollBox } from '../../theme';
import { Button } from '../../components/Button';
import { ProductsCard } from '../../components/ProductsCard';

const PlaygroundScreen = () => {
  return (
    <ScrollBox
      flex={1}
      backgroundColor="background"
      contentContainerStyle={{ padding: 16 }}>
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
          White title
        </Text>
      </Box>
      <Box height={16} />
      {/* Card */}
      <Card>
        <Text variant="title" color="secondaryTextColor">
          Card
        </Text>
        <Text color="secondaryTextColor">white text</Text>
      </Card>
      <Box height={16} />
      {/* ProductsCard */}
      <ProductsCard
        item={{
          id: '1',
          brand: 'Brand',
          title: 'title',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, obcaecati.',
          price: 49.99,
        }}
      />
      <Box height={16} />
      {/* Buttons */}
      <Button text="Button" onPress={() => null} />
      <Box height={16} />
      <Button text="Outline Button" onPress={() => null} />
    </ScrollBox>
  );
};

export default PlaygroundScreen;
