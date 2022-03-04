import { globalCss } from './stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    webkitFontSmoothing: 'antialiased',
  },

  html: {
    fontSize: 10,
    scrollBehavior: 'smooth',
  },

  'body, input, textarea, button': {
  },

  'h1, h2, h3, h4, h5, h6, strong': {
  },

  button: {
    cursor: 'pointer',
  },

  disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '@media(max-width: 1080px)': {
    html: {
    },
  },

  '@media(max-width: 720px)': {
    html: {
    },
  },

});
