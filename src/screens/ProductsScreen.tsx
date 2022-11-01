import React from 'react';
import { Image } from 'react-native';
import { Box, Text } from '../theme';

import { ActivityIndicator } from '../components/ActivityIndicator';

import { useGetProductsQuery } from '../features/api/apiSlice';

const ProductsScreen = ({ route }) => {
  const { data, error, isLoading } = useGetProductsQuery();
  console.log('isLoading: ', isLoading);
  console.log('data: ', data);
  return (
    <Box backgroundColor="background" padding="m" flex={1}>
      <Text>{route.name}</Text>
      {/* {error ? (
        <Text>Oh no, there was an error</Text>
      ) : isLoading ? (
        <ActivityIndicator />
      ) : data ? (
        <>
          <Text>{data.species.name}</Text>
          <Image source={data.sprites.front_shiny} />
        </>
      ) : null} */}
    </Box>
  );
};

export default ProductsScreen;
