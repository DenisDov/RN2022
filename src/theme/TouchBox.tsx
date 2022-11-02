import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { createBox } from '@shopify/restyle';
import { Theme } from './theme';

const TouchBox = createBox<
  Theme,
  TouchableOpacityProps & { children?: React.ReactNode }
>(TouchableOpacity);

export default TouchBox;
