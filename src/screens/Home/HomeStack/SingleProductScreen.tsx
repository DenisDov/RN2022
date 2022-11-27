import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';

import { SingleProductScreenRouteProp } from '../../../@types/navigation';
import { ActivityIndicator } from '../../../components/ActivityIndicator';
import { useGetSingleProductQuery } from '../../../services/productsApi';
import { Box, Text } from '../../../theme';

const SingleProductScreen = () => {
  const route = useRoute<SingleProductScreenRouteProp>();
  const navigation = useNavigation();
  const { productId, brand = '' } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: brand,
    });
  }, [navigation, brand]);

  const {
    data: product,
    isLoading,
    error,
  } = useGetSingleProductQuery(productId);

  return (
    <Box flex={1} backgroundColor="background" padding="m">
      {error ? (
        <Text>{error.toString()}</Text>
      ) : isLoading && !product ? (
        <Box margin="xl">
          <ActivityIndicator />
        </Box>
      ) : product ? (
        <Box>
          <Text>{route.name}</Text>
          <Text>{productId}</Text>
        </Box>
      ) : null}
    </Box>
  );
};

export default SingleProductScreen;
