import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { createBox } from '@shopify/restyle';
import { Theme } from '../theme';

const TouchBox = createBox<
  Theme,
  RectButtonProps & { children?: React.ReactNode }
>(RectButton);

export default TouchBox;
