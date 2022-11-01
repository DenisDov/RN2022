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
    background: palette.white,
    card: palette.darkBlue,
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
  cardVariants: {
    defaults: {
      backgroundColor: 'accent',
      // We can define defaults for the variant here.
      // This will be applied after the defaults passed to createVariant and before the variant defined below.
    },
    regular: {
      // We can refer to other values in the theme here, and use responsive props
      padding: {
        phone: 's',
        tablet: 'm',
      },
    },
    elevated: {
      padding: {
        phone: 's',
        tablet: 'm',
      },
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 15,
      elevation: 5,
    },
  },
});

export type Theme = typeof theme;
export default theme;
