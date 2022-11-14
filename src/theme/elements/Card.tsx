import {
  SpacingProps,
  VariantProps,
  createRestyleComponent,
  createVariant,
  spacing,
} from '@shopify/restyle';
import { PropsWithChildren } from 'react';

import { Theme } from '../theme';

type CardProps = PropsWithChildren<
  SpacingProps<Theme> & VariantProps<Theme, 'cardVariants'>
>;

const Card = createRestyleComponent<CardProps, Theme>([
  spacing,
  createVariant({ themeKey: 'cardVariants' }),
]);

export default Card;
