import { createTheme } from '@shopify/restyle';

const palette = {
  yellow: '#FCDC73',
  red: '#E76268',
  blue: '#4FADC0',
  darkBlue: '#193948',
  white: '#F0F2F3',
  black: '#0F1115',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.darkBlue,
    text: palette.black,
    main: palette.red,
    accent: palette.yellow,
    secondary: palette.blue,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    xs: 4,
    s: 11,
    m: 16,
    l: 22,
    xl: 36,
    xxl: 85,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    defaults: {
      fontFamily: 'Raleway-Regular',
      fontSize: 16,
      color: 'text',
    },
    header: {
      fontFamily: 'Raleway-Bold',
      fontSize: 34,
    },
  },
});

export type Theme = typeof theme;
export default theme;
