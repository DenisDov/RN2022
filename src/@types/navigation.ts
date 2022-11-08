import type { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Register: undefined;
  Login: undefined;

  Home: undefined;
  Profile: undefined;
  Products: undefined;
  SingleProduct: {
    productId: string;
  };

  Playground: undefined;
};

export type SingleProductScreenRouteProp = RouteProp<
  RootStackParamList,
  'SingleProduct'
>;
