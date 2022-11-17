import { createBox } from '@shopify/restyle';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { Theme } from '../theme';

const RectButtonBox = createBox<
  Theme,
  RectButtonProps & { children?: React.ReactNode }
>(RectButton);

export default RectButtonBox;
