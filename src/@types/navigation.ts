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

  CameraPermissionsScreen: undefined;
  CameraScreen: undefined;

  Settings: undefined;
  AppSettingsScreen: undefined;
  ActionSheetsScreen: undefined;
  HTMLScreen: undefined;
  WebViewScreen: undefined;
  CameraRollScreen: undefined;
  ImagePickerScreen: undefined;
  VideoScreen: undefined;
  YoutubeScreen: undefined;
  VimeoScreen: undefined;

  Playground: undefined;
};

export type SingleProductScreenRouteProp = RouteProp<
  RootStackParamList,
  'SingleProduct'
>;
