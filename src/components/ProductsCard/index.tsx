import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { theme, Box, Text, ImageBox } from '@theme';
import { Images } from '@assets';
import { IProduct } from '../../services/productsApi';

import { capitalize } from '../../utils/capitalize';

interface ProductItem {
  item: IProduct;
}

const ProductsCard = ({ item: product }: ProductItem) => {
  const navigation = useNavigation();
  const intlPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price);

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
        <Text numberOfLines={1}>{capitalize(product.brand)}</Text>
        <Text numberOfLines={3}>{product.description}</Text>
        <Text numberOfLines={1}>{intlPrice}</Text>
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
