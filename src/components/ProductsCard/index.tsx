import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { theme, Box, Text, ImageBox } from '@theme';
import { Images } from '@assets';
import { IProduct } from '../../services/productsApi';

import { capitalize } from '../../utils/capitalize';

const ProductsCard = ({ item: product }: any) => {
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
    // <TouchBox
    //   onPress={() =>
    //     navigation.navigate('SingleProduct', {
    //       productId: product.id,
    //       brand: product.brand,
    //     })
    //   }
    //   flex={1}
    //   height={200}
    //   backgroundColor="background"
    //   borderRadius="s"
    //   borderWidth={StyleSheet.hairlineWidth}
    //   borderColor="main"
    //   padding="s"
    //   margin="xs">
    //   <ImageBox
    //     source={{ uri: product.thumbnail }}
    //     width={80}
    //     height={80}
    //     borderRadius="s"
    //     defaultSource={Images.dummy}
    //   />
    //   <Text numberOfLines={1}>{capitalize(product.brand)}</Text>
    //   <Text numberOfLines={3}>{product.description}</Text>
    //   <Text numberOfLines={1}>{intlPrice}</Text>
    // </TouchBox>
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
    // padding: theme.spacing.s,
    // margin: theme.spacing.xs,
    // shadowColor: theme.colors.main,
    // shadowOpacity: 0.5,
    // shadowOffset: { width: 5, height: 5 },
    // shadowRadius: 5,
    // elevation: 5,
  },
  card: {
    flex: 1,
    // height: 200,
    padding: theme.spacing.s,
    borderRadius: theme.borderRadii.m,
    // margin: theme.spacing.xs,
    // backgroundColor: theme.colors.background,
    // borderRadius: theme.borderRadii.m,
    // borderWidth: StyleSheet.hairlineWidth,
    // borderColor: theme.colors.main,
    // padding: theme.spacing.s,
    // margin: theme.spacing.xs,
    // shadowColor: theme.colors.main,
    // shadowOpacity: 0.5,
    // shadowOffset: { width: 5, height: 5 },
    // shadowRadius: 5,
    // elevation: 5,
  },
});

export { ProductsCard };
