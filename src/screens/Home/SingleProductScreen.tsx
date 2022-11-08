import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Box, Text } from '@theme';
import { ActivityIndicator } from '../../components/ActivityIndicator';

import { useGetSingleProductQuery } from '../../services/productsApi';

import { SingleProductScreenRouteProp } from '../../@types/navigation';

const SingleProductScreen = () => {
  const route = useRoute<SingleProductScreenRouteProp>();
  const {
    data: product,
    isLoading,
    error,
  } = useGetSingleProductQuery(route.params?.productId);

  return (
    <Box flex={1} backgroundColor="background">
      {error ? (
        <Text>{error.status}</Text>
      ) : isLoading && !product ? (
        <Box margin="xl">
          <ActivityIndicator />
        </Box>
      ) : product ? (
        <Box>
          <Text>{route.name}</Text>
          <Text>{route.params?.productId}</Text>
        </Box>
      ) : null}
    </Box>
  );
};

export default SingleProductScreen;
