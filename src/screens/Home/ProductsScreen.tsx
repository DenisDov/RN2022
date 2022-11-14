import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Box, Text } from '../../theme';

import { useGetAllProductsQuery } from '../../services/productsApi';

import { ActivityIndicator } from '../../components/ActivityIndicator';
import { ProductsCard } from '../../components/ProductsCard';

const ProductsScreen = () => {
  const { data: allProducts, isLoading, error } = useGetAllProductsQuery();
  const navigation = useNavigation();

  return (
    <Box flex={1} backgroundColor="background">
      {error && (
        <Box padding="m">
          <Text>Oh no, there was an: {error.status}</Text>
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
          estimatedItemSize={40}
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
