import { createTheme } from '@shopify/restyle';

const palette = {
  // primary light theme
  white: '#ffffff',
  wildSand: '#f5f5f5',
  silver: '#c2c2c2',
  // primary dark theme
  limitedSpruce: '#37464f',
  nevada: '#62717b',
  gableGreen: '#101f27',
  // primary text color
  black: '#000000',
};

const theme = createTheme({
  colors: {
    background: palette.white,
    main: palette.wildSand,
    accent: palette.silver,
    text: palette.black,
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
      color: 'text',
    },
    header: {
      fontFamily: 'Raleway-Bold',
      fontSize: 34,
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
        tablet: 'm',
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

const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: palette.nevada,
    main: palette.limitedSpruce,
    accent: palette.gableGreen,
    text: palette.white,
  },
};

export { theme, darkTheme };
