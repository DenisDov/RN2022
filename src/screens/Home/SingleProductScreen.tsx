import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Box, Text } from '@theme';
import { ActivityIndicator } from '../../components/ActivityIndicator';

import { useGetSingleProductQuery } from '../../services/productsApi';

const SingleProductScreen = () => {
  const route = useRoute();
  const {
    data: product,
    isLoading,
    error,
  } = useGetSingleProductQuery(route.params?.productId);

  return (
    <Box padding="m" flex={1}>
      {error ? (
        <Text>{error.status}</Text>
      ) : isLoading && !product ? (
        <Box margin="xl">
          <ActivityIndicator />
        </Box>
      ) : product ? (
        <Box backgroundColor="background" padding="m" flex={1}>
          <Text>{route.name}</Text>
          <Text>{route.params?.productId}</Text>
        </Box>
      ) : null}
    </Box>
  );
};

export default SingleProductScreen;
