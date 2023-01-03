import { faker } from '@faker-js/faker';
import React from 'react';

import { Accordion } from '../../../components/Accordion';
import { Header } from '../../../components/Header';
import { Box } from '../../../theme';

const SECTIONS = [
  {
    _id: faker.datatype.uuid(),
    title: faker.lorem.words(2),
    content: faker.lorem.words(50),
  },
  {
    _id: faker.datatype.uuid(),
    title: faker.lorem.words(2),
    content: faker.lorem.words(50),
  },
];

const AccordionScreen = () => {
  return (
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="RenderHtml" />
      <Box flex={1} padding="m">
        {SECTIONS.map(item => (
          <Accordion key={item._id} item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default AccordionScreen;
