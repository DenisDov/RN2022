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
    background: '#FDFDFD',
    main: '#2F365F',
    secondary: '#5065ED',
    // accent: '#5065ED',
    lightText: '#F0F2F3',
    darkText: '#121212',
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
    header: {
      fontFamily: 'Raleway-Bold',
      fontSize: 34,
    },
    button: {
      color: 'lightText',
    },
    welcomeTitle: {
      fontFamily: 'Raleway-Bold',
      fontSize: 34,
      // color: 'lightText',
    },
    welcomeDescription: {
      // color: 'lightText',
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
      shadowColor: 'accent',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 15,
      elevation: 5,
    },
  },
});

export type Theme = typeof theme;

// const darkTheme: Theme = {
//   ...theme,
//   colors: {
//     ...theme.colors,
//     background: palette.codGray,
//     main: palette.chambray,
//     secondary: palette.carnation,
//     accent: palette.cheese,
//     text: palette.white,
//   },
// };

export default theme;
