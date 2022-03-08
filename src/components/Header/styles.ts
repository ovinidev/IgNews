import { styled } from '../../styles/stitches.config';

export const Container = styled('header', {
  height: '8rem',
  borderBottom: '1px solid #29292E',
  background: '$background',
});

export const Content = styled('div', {
  display: 'flex',
  alignItems: 'center',

  maxWidth: '110.6rem',
  height: '8rem',
  margin: '0 auto',

  button: {
    marginLeft: 'auto',
  },
});

export const Item = styled('a', {
  display: 'inline-block',
  color: '$text',
  fontSize: '$2',
  marginRight: '2.4rem',
  padding: '0 0.8rem',
  lineHeight: '8rem',
  transition: 'color 0.3s',
  position: 'relative',

  '&:hover': {
    color: '$title',
  },

  variants: {
    selected: {
      true: {
        color: '$title',
        fontWeight: 'bold',

        '&::after': {
          content: '',
          height: 3,
          width: '100%',
          borderRadius: '10px 10px 0 0',
          background: '$yellow',

          position: 'absolute',
          bottom: '0.1rem',
          left: 0,

        },
      },
    },
  },
});

export const Nav = styled('nav', {
  marginLeft: '7.8rem',
  height: '8rem',
});
