import { PropsWithChildren } from 'react';
import {
  createRestyleComponent,
  createVariant,
  spacing,
  SpacingProps,
  VariantProps,
} from '@shopify/restyle';
import { Theme } from '../theme';

type CardProps = PropsWithChildren<
  SpacingProps<Theme> & VariantProps<Theme, 'cardVariants'>
>;

const Card = createRestyleComponent<CardProps, Theme>([
  spacing,
  createVariant({ themeKey: 'cardVariants' }),
]);

export default Card;
