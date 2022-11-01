import React from 'react';
import { Image } from 'react-native';
import { Box, Text } from '../theme';

import { ActivityIndicator } from '../components/ActivityIndicator';

import { useGetPokemonByNameQuery } from '../redux/slices/apis/productApiSlice';

const ProductsScreen = ({ route }) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');
  console.log('isLoading: ', isLoading);
  return (
    <Box backgroundColor="mainBackground" padding="m" flex={1}>
      <Text>{route.name}</Text>
      {error ? (
        <Text>Oh no, there was an error</Text>
      ) : isLoading ? (
        <ActivityIndicator />
      ) : data ? (
        <>
          <Text>{data.species.name}</Text>
          <Image source={data.sprites.front_shiny} />
        </>
      ) : null}
    </Box>
  );
};

export default ProductsScreen;
