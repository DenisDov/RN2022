import { Image, ImageProps } from 'react-native';
import { createBox } from '@shopify/restyle';
import { Theme } from './theme';

const ImageBox = createBox<Theme, ImageProps>(Image);

export default ImageBox;
