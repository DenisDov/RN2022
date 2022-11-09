import { createTheme } from '@shopify/restyle';

// https://chir.ag/projects/name-that-color
// const palette = {
//   codGray: '#E9EFFE',
//   chambray: '#0091ea',
//   carnation: '#7D86AC',
//   black: '#121212',
// };

const theme = createTheme({
  colors: {
    background: '#F5F5F6',
    main: '#2F365F',
    secondary: '#5065ED',

    lightText: '#FFFFFF',
    darkText: '#000000',
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 22,
    xl: 44,
    xxl: 88,
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
      color: 'darkText',
    },
    title: {
      fontFamily: 'Raleway-Bold',
      fontSize: 34,
    },
    whiteTitle: {
      fontFamily: 'Raleway-Bold',
      fontSize: 34,
      color: 'lightText',
    },
    button: {
      color: 'lightText',
    },
    welcomeTitle: {
      fontFamily: 'Raleway-Bold',
      fontSize: 34,
    },
    welcomeDescription: {
      marginVertical: 'l',
    },
  },
  cardVariants: {
    defaults: {
      backgroundColor: 'main',
      borderRadius: 's',
      padding: 's',
    },
    regular: {
      padding: {
        phone: 's',
        // tablet: 'm',
      },
    },
    elevated: {
      padding: {
        phone: 's',
        tablet: 'm',
      },
      shadowColor: 'main',
      shadowOpacity: 0.5,
      shadowOffset: { width: 5, height: 5 },
      shadowRadius: 5,
      elevation: 5,
    },
  },
});

export type Theme = typeof theme;

export default theme;
