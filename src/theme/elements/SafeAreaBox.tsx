import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';
import { createBox } from '@shopify/restyle';
import { Theme } from '../theme';

const SafeAreaBox = createBox<
  Theme,
  SafeAreaViewProps & { children?: React.ReactNode }
>(SafeAreaView);

export default SafeAreaBox;
