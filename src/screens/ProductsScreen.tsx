import React from 'react';
import { MasonryFlashList } from '@shopify/flash-list';
import { Box, Text, TouchBox, ImageBox } from '../theme';

import { ActivityIndicator } from '../components/ActivityIndicator';

import { useGetAllProductsQuery } from '../services/apiSlice';

import { capitalize } from '../utils/capitalize';

const dummyImage = require('../assets/images/dummy.jpeg');
const ProductCard = ({ item }) => {
  const intlPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(item.price);
  return (
    <TouchBox
      onPress={() => console.log('item press')}
      backgroundColor="card"
      height={200}
      borderRadius="s"
      padding="s"
      margin="xs">
      <ImageBox
        source={{ uri: item.thumbnail }}
        width={80}
        height={80}
        borderRadius="s"
        defaultSource={dummyImage}
      />
      <Text numberOfLines={1}>{capitalize(item.brand)}</Text>
      <Text numberOfLines={3}>{item.description}</Text>
      <Text numberOfLines={1}>{intlPrice}</Text>
    </TouchBox>
  );
};

const ProductsScreen = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useGetAllProductsQuery(undefined);

  return (
    <Box backgroundColor="background" flex={1}>
      {error ? (
        <Text>Oh no, there was an: {error.status}</Text>
      ) : isLoading ? (
        <Box margin="xl">
          <ActivityIndicator />
        </Box>
      ) : products ? (
        <MasonryFlashList
          data={products}
          renderItem={ProductCard}
          estimatedItemSize={100}
          numColumns={2}
          ListEmptyComponent={<Text>no products available</Text>}
        />
      ) : null}
    </Box>
  );
};

export default ProductsScreen;
