import { styled } from '../../styles/stitches.config';

export const Container = styled('button', {
  height: '4.8rem',
  borderRadius: '$1',
  background: '$shape',
  border: 'none',

  padding: '0 2.4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  fontSize: '$2',
  color: '$title',
  fontWeight: 'bold',

  'svg:first-child': {
    height: '2.4rem',
    width: '2.4rem',
    marginRight: '1.7rem',
  },

  'svg:nth-child(2)': {
    height: '2.4rem',
    width: '2.4rem',
    color: '#737380',
    marginLeft: '1.6rem',
  },

  transition: 'filter 0.2s',

  '&:hover': {
    filter: 'brightness(0.8)',
  },
});
