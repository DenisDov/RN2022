import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Images } from '../../assets';
import { IProduct } from '../../services/productsApi';
import { ImageBox, RectBox, Text } from '../../theme';

type ProductItem = {
  item: IProduct;
  navigation: any;
};

const ProductsCard = ({ item: product }: ProductItem) => {
  const navigation = useNavigation();

  return (
    // RectButton borderColor propery not working on Android devices, thats why we need to wrap RectButton in outer View
    <RectBox
      onPress={() =>
        navigation.navigate('SingleProduct', {
          productId: product.id,
          brand: product.brand,
        })
      }
      flex={1}
      height={200}
      padding="s"
      margin="xs"
      borderRadius="m"
      backgroundColor="background">
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
    </RectBox>
  );
};

export { ProductsCard };
