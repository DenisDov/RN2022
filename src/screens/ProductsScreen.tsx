import React from 'react';
import { Dimensions } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { Box, Text, TouchBox, ImageBox } from '../theme';

import { useGetAllProductsQuery } from '../services/api';

import { capitalize } from '../utils/capitalize';

const { width } = Dimensions.get('window');

const MyLoader = () => {
  return (
    <Box flexDirection="row" flexWrap="wrap">
      {[...Array(6).keys()].map(key => (
        <ContentLoader
          key={key}
          width={width / 2 - 8}
          height={200}
          viewBox="0 0 200 200"
          backgroundColor="#FCDC73"
          foregroundColor="#ecebeb"
          style={{
            margin: 4,
          }}>
          <Rect x="8" y="96" rx="3" ry="3" width="410" height="6" />
          <Rect x="8" y="114" rx="3" ry="3" width="380" height="6" />
          <Rect x="8" y="133" rx="3" ry="3" width="123" height="6" />
          <Rect x="8" y="5" rx="11" width="80" height="80" />
        </ContentLoader>
      ))}
    </Box>
  );
};

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
      width={width / 2 - 8}
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
  const { data: allProducts, isLoading, error } = useGetAllProductsQuery();

  console.log('allProducts: ', allProducts);
  return (
    <Box backgroundColor="background" flex={1}>
      {error ? (
        <Text>Oh no, there was an: {error.status}</Text>
      ) : isLoading ? (
        <MyLoader />
      ) : allProducts ? (
        <FlashList
          data={allProducts}
          renderItem={ProductCard}
          estimatedItemSize={100}
          numColumns={2}
          ListEmptyComponent={<Text>no products available</Text>}
          keyExtractor={item => item.id}
        />
      ) : null}
    </Box>
  );
};

export default ProductsScreen;
