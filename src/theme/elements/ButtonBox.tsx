import {
  SpacingProps,
  VariantProps,
  createRestyleComponent,
  createVariant,
  spacing,
} from '@shopify/restyle';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

// import { ScrollView, ScrollViewProps } from 'react-native';
import { Theme } from '../theme';

// const ButtonBox = createBox<
//   Theme,
//   RectButtonProps & { children?: React.ReactNode }
// >(RectButton);

const ButtonBox = createRestyleComponent<
  VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof RectButton>,
  Theme
>([createVariant({ themeKey: 'buttonVariants' })], RectButton);

export default ButtonBox;
