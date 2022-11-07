import { ScrollView, ScrollViewProps } from 'react-native';
import { createBox } from '@shopify/restyle';
import { Theme } from './theme';

const ScrollBox = createBox<
  Theme,
  ScrollViewProps & { children?: React.ReactNode }
>(ScrollView);

export default ScrollBox;
