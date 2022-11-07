import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { useNavigation } from '@react-navigation/native';
import { Box, Text } from '@theme';

import { useGetAllProductsQuery } from '../../services/productsApi';

import { Skeleton } from '../../components/ProductsCard/Skeleton';
import { ProductsCard } from '../../components/ProductsCard';

const ProductsScreen = () => {
  const { data: allProducts, isLoading, error } = useGetAllProductsQuery();
  const navigation = useNavigation();
  return (
    <Box flex={1}>
      {error ? (
        <Box padding="m">
          <Text>Oh no, there was an: {error.status}</Text>
        </Box>
      ) : isLoading && !allProducts ? (
        <Skeleton />
      ) : allProducts ? (
        <FlashList
          data={allProducts}
          renderItem={({ item }) => (
            <ProductsCard item={item} navigation={navigation} />
          )}
          estimatedItemSize={40}
          numColumns={2}
          ListEmptyComponent={<Text>no products available</Text>}
          keyExtractor={item => item.id}
        />
      ) : null}
    </Box>
  );
};

export default ProductsScreen;
