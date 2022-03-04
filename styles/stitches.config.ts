import {createStitches} from '@stitches/react';

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

    // A property for applying width/height together
    size: (value: string | number) => ({
      width: value,
      height: value,
    }),

    // A property to apply linear gradient
    linearGradient: (value: string | number) => ({
      backgroundImage: `linear-gradient(${value})`,
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
      background: '',
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
      primary: '',
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
