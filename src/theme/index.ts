import { createTheme } from '@shopify/restyle';

const palette = {
  yellow: '#FCDC73',
  red: '#E76268',
  dark: '#193948',
  blue: '#4FADC0',
  white: '#F0F2F3',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.dark,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    defaults: {
      fontFamily: 'Raleway-Regular',
      fontSize: 16,
    },
    header: {
      fontFamily: 'Raleway-Bold',
      fontSize: 34,
      color: 'black',
    },
  },
});

export type Theme = typeof theme;
export default theme;
