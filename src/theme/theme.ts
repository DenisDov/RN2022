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

    primaryTextColor: '#000000',
    secondaryTextColor: '#FFFFFF',

    lightCard: '#FFFFFF',
  },
  //Spacing tends to follow multiples of a given base spacing number
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 64,
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
      color: 'primaryTextColor',
    },
    title: {
      fontFamily: 'Raleway-Bold',
      fontSize: 34,
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
      shadowColor: 'main',
      shadowOpacity: 0.5,
      shadowOffset: { width: 5, height: 5 },
      shadowRadius: 5,
      elevation: 5,
    },
    main: {
      backgroundColor: 'main',
      borderRadius: 'm',
    },
    submitForm: {
      backgroundColor: 'lightCard',
      borderRadius: 'xl',
    },
  },
});

export type Theme = typeof theme;

export default theme;
