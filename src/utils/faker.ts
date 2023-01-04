import { faker } from '@faker-js/faker';

// example: const slides = createSlides();
export const createSlides = (count = 5) => {
  return new Array(count).fill(undefined).map(() => {
    return {
      id: faker.datatype.uuid(),
      title: faker.lorem.words(3),
      description: faker.lorem.words(10),
      background: faker.color.human(),
      image: faker.image.abstract(),
    };
  });
};
