import { styled } from '../styles/stitches.config';

export const Container = styled('main', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: '$background',
  height: 'calc(100vh - 8rem)',
});

export const Content = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '110.6rem',
  margin: '0 auto',
});

export const TextContainer = styled('div', {
  color: '$title',
  height: '41.8rem',
  width: '50.8rem',

  span: {
    fontSize: '$5',
    lineHeight: '3.4rem',
    color: '$text',
  },

  h1: {
    fontSize: '$7',
    fontWeight: 900,
    lineHeight: '7.2rem',
    margin: '4rem 0 2.4rem 0',

    span: {
      fontSize: '$7',
      fontWeight: 900,
      lineHeight: '7.2rem',
      color: '$blue',
    },
  },

  p: {
    fontSize: '$5',
    marginBottom: '4rem',

    span: {
      fontSize: '$5',
      color: '$blue',
    },
  },
});

export const SubscribeButton = styled('button', {
  height: '6.4rem',
  borderRadius: '$1',
  border: 'none',
  width: '26rem',
  background: '$yellow',
  color: '$background',
  fontSize: '$4',
  fontWeight: 'bold',

  transition: 'filter 0.2s',

  '&:hover': {
    filter: 'brightness(1.2)',
  },
});
