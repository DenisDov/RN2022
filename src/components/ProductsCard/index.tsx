import React from 'react';
import { Dimensions } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { Text, TouchBox, ImageBox } from '../../theme';

import { capitalize } from '../../utils/capitalize';
// import { IProduct } from '../../models/IProduct';

// const dummyImage = require('../../assets/images/dummy.jpeg');

import { Images } from '@assets';

const { width } = Dimensions.get('window');

const ProductsCard = ({ item: product, navigation }) => {
  const intlPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price);

  return (
    <TouchBox
      onPress={() =>
        navigation.navigate('SingleProduct', { productId: product.id })
      }
      backgroundColor="card"
      height={200}
      width={width / 2 - 8}
      borderRadius="s"
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