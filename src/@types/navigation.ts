import type { RouteProp } from '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

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
  WebViewScreen: undefined;
  CameraRollScreen: undefined;
  ImagePickerScreen: undefined;

  Playground: undefined;
};

export type SingleProductScreenRouteProp = RouteProp<
  RootStackParamList,
  'SingleProduct'
>;
