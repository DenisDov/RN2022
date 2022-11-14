import { createBox } from '@shopify/restyle';
import { ImageBackground, ImageBackgroundProps } from 'react-native';

import { Theme } from '../theme';

const ImageBackgroundBox = createBox<
  Theme,
  ImageBackgroundProps & { children?: React.ReactNode }
>(ImageBackground);

export default ImageBackgroundBox;
