import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchBox, ImageBox } from '@theme';
import { Images } from '@assets';

import { capitalize } from '../../utils/capitalize';

const ProductsCard = ({ item: product }) => {
  const navigation = useNavigation();
  const intlPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price);

  return (
    <TouchBox
      onPress={() =>
        navigation.navigate('SingleProduct', {
          productId: product.id,
          brand: product.brand,
        })
      }
      flex={1}
      height={200}
      backgroundColor="background"
      borderRadius="s"
      borderWidth={StyleSheet.hairlineWidth}
      borderColor="main"
      padding="s"
      margin="xs">
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
    </TouchBox>
  );
};

export { ProductsCard };
