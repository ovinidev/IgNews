import { createStitches } from '@stitches/react';

export const {
  styled,
  globalCss,
  createTheme,
  getCssText,
} = createStitches({
  utils: {
    // Abbreviated margin properties
    m: (value: string | number) => ({
      margin: value,
    }),
    mt: (value: string | number) => ({
      marginTop: value,
    }),
    mr: (value: string | number) => ({
      marginRight: value,
    }),
    mb: (value: string | number) => ({
      marginBottom: value,
    }),
    ml: (value: string | number) => ({
      marginLeft: value,
    }),
    mx: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // An abbreviated property for border-radius
    br: (value: string | number) => ({
      borderRadius: value,
    }),
  },
  media: {
    bp1: '(max-width: 375px)',
    bp2: '(max-width: 390px)',
    bp3: '(max-width: 414px)',
  },
  theme: {
    colors: {
      blue: '',
      green: '',
      yellow: '',
      title: '',
      text: '',
      shape: '',
      background: '#121214',
    },
    space: {
    },
    fontSizes: {
      1: '1.4rem',
      2: '1.6rem',
      3: '1.8rem',
      4: '2rem',
      5: '2.4rem',
      6: '5.4rem',
      7: '7.2rem',
    },
    fonts: {
      Roboto: 'Roboto, sans-serif',
    },
    fontWeights: {},
    lineHeights: {
    },
    letterSpacings: {},
    sizes: {
      imageHeight: '52rem',
      imageWidth: '33.4rem',
    },
    borderWidths: {
    },
    borderStyles: {
    },
    radii: {
      1: '100px',
    },
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});

export const ThemeProvider = styled('div', {});

export const light = createTheme({
  colors: {
    blue: '#61DCFB',
    green: '#04D361',
    yellow: '#EBA417',
    title: '#E1E1E6',
    text: '#A8A8B3',
    shape: '#1F2729',
    background: '#121414',
  },
});

export const dark = createTheme({
  colors: {
    blue: '#61DCFB',
    green: '#04D361',
    yellow: '#EBA417',
    title: '#E1E1E6',
    text: '#A8A8B3',
    shape: '#1F2729',
    background: '#121414',
  },
});
