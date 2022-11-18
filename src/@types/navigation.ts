import type { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Welcome: undefined;

  Register: undefined;
  Login: undefined;

  Home: undefined;
  Profile: undefined;
  Products: undefined;
  SingleProduct: {
    productId: string;
    brand: string;
  };

  Settings: undefined;
  HTMLScreen: undefined;
  VideoScreen: undefined;

  Playground: undefined;
};

export type SingleProductScreenRouteProp = RouteProp<
  RootStackParamList,
  'SingleProduct'
>;
