import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { AnimatePresence, MotiView } from 'moti';
import React from 'react';
import { StyleSheet } from 'react-native';

import { ActivityIndicator } from '../../../components/ActivityIndicator';
import { Header } from '../../../components/Header';
import { ProductsCard } from '../../../components/ProductsCard';
import { useGetAllProductsQuery } from '../../../services/productsApi';
import { Box, Text } from '../../../theme';

const Skeleton = () => (
  <MotiView
    animate={{ opacity: 1 }}
    exit={{
      opacity: 0,
    }}>
    <Box padding="m">
      <ActivityIndicator />
    </Box>
  </MotiView>
);

const ProductsScreen = () => {
  const { data: allProducts, isLoading, error } = useGetAllProductsQuery();
  const navigation = useNavigation();

  return (
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="Products" />
      {error && (
        <Box padding="m">
          <Text>{error.toString()}</Text>
        </Box>
      )}
      <AnimatePresence exitBeforeEnter>
        {isLoading && <Skeleton key="skeleton" />}
        {allProducts && (
          <FlashList
            data={allProducts}
            renderItem={({ item }) => {
              return (
                <MotiView
                  style={styles.motiView}
                  key={item.id}
                  from={{ opacity: 0, translateY: +item.id * 10 }}
                  animate={{ opacity: 1, translateY: 0 }}>
                  <ProductsCard item={item} navigation={navigation} />
                </MotiView>
              );
            }}
            estimatedItemSize={30}
            numColumns={2}
            ListEmptyComponent={<Text>no products available</Text>}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.flashList}
            showsVerticalScrollIndicator={false}
          />
        )}
      </AnimatePresence>
    </Box>
  );
};

const styles = StyleSheet.create({
  flashList: {
    padding: 8,
  },
  motiView: {
    flex: 1,
  },
});

export default ProductsScreen;
