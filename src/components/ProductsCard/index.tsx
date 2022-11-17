import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Images } from '../../assets';
import { IProduct } from '../../services/productsApi';
import { Box, ImageBox, Text, theme } from '../../theme';

interface ProductItem {
  item: IProduct;
  navigation: any;
}

const ProductsCard = ({ item: product }: ProductItem) => {
  const navigation = useNavigation();

  return (
    // RectButton borderColor propery not working on Android devices, thats why we need to wrap RectButton in outer View
    <Box style={styles.outer}>
      <RectButton
        onPress={() =>
          navigation.navigate('SingleProduct', {
            productId: product.id,
            brand: product.brand,
          })
        }
        style={styles.card}>
        <ImageBox
          source={{ uri: product.thumbnail }}
          width={80}
          height={80}
          borderRadius="s"
          defaultSource={Images.dummy}
        />
        <Text numberOfLines={1}>{product.brand}</Text>
        <Text numberOfLines={3}>{product.description}</Text>
        <Text numberOfLines={1}>{product.price}</Text>
      </RectButton>
    </Box>
  );
};

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    height: 200,
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadii.m,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.main,
    margin: theme.spacing.xs,
  },
  card: {
    flex: 1,
    padding: theme.spacing.s,
    borderRadius: theme.borderRadii.m,
  },
});

export { ProductsCard };
