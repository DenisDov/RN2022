import React, { useState } from 'react';
import { useAnimatedStyle, withTiming } from 'react-native-reanimated';

import { Header } from '../../../components/Header';
import { Box, RectBox, Text } from '../../../theme';

const SECTIONS = [
  {
    title: 'First',
    content:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, recusandae.',
  },
  {
    title: 'Second',
    content:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, recusandae.',
  },
];

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
        <Box backgroundColor="background" padding="m">
          <Text>{item.content}</Text>
        </Box>
      )}
    </Box>
  );
};

const AccordionScreen = () => {
  return (
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="RenderHtml" />
      <Box flex={1} padding="m">
        {SECTIONS.map(item => (
          <Accordion key={item.title} item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default AccordionScreen;
