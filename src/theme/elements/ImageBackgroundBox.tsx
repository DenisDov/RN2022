import { ImageBackground, ImageBackgroundProps } from 'react-native';
import { createBox } from '@shopify/restyle';
import { Theme } from '../theme';

const ImageBackgroundBox = createBox<
  Theme,
  ImageBackgroundProps & { children?: React.ReactNode }
>(ImageBackground);

export default ImageBackgroundBox;
