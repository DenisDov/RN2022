import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { StyleSheet } from 'react-native';

import { ActivityIndicator } from '../../../components/ActivityIndicator';
import { Header } from '../../../components/Header';
import { ProductsCard } from '../../../components/ProductsCard';
import { useGetAllProductsQuery } from '../../../services/productsApi';
import { Box, Text } from '../../../theme';

const ProductsScreen = () => {
  const { data: allProducts, isLoading, error } = useGetAllProductsQuery();
  console.log('error: ', error);
  const navigation = useNavigation();

  return (
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="Products" />
      {error && (
        <Box padding="m">
          <Text>{error.toString()}</Text>
        </Box>
      )}
      {isLoading && !allProducts && (
        <Box padding="m">
          <ActivityIndicator />
        </Box>
      )}
      {allProducts && (
        <FlashList
          data={allProducts}
          renderItem={({ item }) => (
            <ProductsCard item={item} navigation={navigation} />
          )}
          estimatedItemSize={30}
          numColumns={2}
          ListEmptyComponent={<Text>no products available</Text>}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.flashList}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  flashList: {
    padding: 8,
  },
});

export default ProductsScreen;
