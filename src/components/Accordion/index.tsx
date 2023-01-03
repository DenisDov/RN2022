import React, { useState } from 'react';
import Animated, { withSpring } from 'react-native-reanimated';

import { Box, RectBox, Text } from '../../theme';

type AccordionProps = {
  item: {
    title: string;
    content: string;
  };
};

const Accordion = ({ item }: AccordionProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <Box>
      <RectBox
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        backgroundColor="main"
        onPress={() => setVisible(prev => !prev)}
        padding="m">
        <Text>{item.title}</Text>
        <Text fontSize={32} lineHeight={32}>
          {visible ? '-' : '+'}
        </Text>
      </RectBox>
      {visible && (
        <Animated.View style={{ backgroundColor: '#313235', padding: 16 }}>
          <Text>{item.content}</Text>
        </Animated.View>
      )}
    </Box>
  );
};

export { Accordion };
