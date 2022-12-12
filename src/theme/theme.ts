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
    surface: '#F5F5F6',
    background: '#ffffff',

    main: '#5065ED',
    inputPlaceholder: '#97989E',
    muted: '#303134',
    error: '#DE3030',
    shadow: '#121212',
    headerTitle: '#E9EFFE',

    primaryText: '#000000',
    primaryButtonText: '#E9EFFE',
    outlineButtonText: '#121212',
    outlineButtonBorder: '#121212',
    tabBarLabel: '#97989E',
    statusBar: '#2F365F',
  },
  // Spacing tends to follow multiples of a given base spacing number
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
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 64,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    defaults: {
      fontFamily: 'Raleway-Regular',
      fontSize: 16,
      color: 'primaryText',
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
    headerTitle: {
      textAlign: 'center',
      color: 'headerTitle',
    },
    bold: {
      fontFamily: 'Raleway-Bold',
    },
  },
  cardVariants: {
    defaults: {
      shadowColor: 'shadow',
      shadowOpacity: 0.25,
      shadowOffset: { width: 2, height: 2 },
      shadowRadius: 2,
      elevation: 2,
    },
    main: {
      backgroundColor: 'background',
      borderRadius: 'm',
    },
    submitForm: {
      backgroundColor: 'background',
      borderRadius: 'xl',
    },
  },
});

const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    surface: '#1A1B1E',
    background: '#313235',

    primaryText: '#FFFFFF',
    outlineButtonBorder: '#E9EFFE',
    outlineButtonText: '#E9EFFE',
  },
};

export type Theme = typeof theme;

export { theme, darkTheme };
