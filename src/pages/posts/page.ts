import { styled } from '../../styles/stitches.config';

export const Container = styled('main', {
  background: '$background',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
});

export const PostContainer = styled('section', {
  maxWidth: '72.8rem',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  cursor: 'pointer',

  '&:first-child': {
    marginTop: '8rem',
  },

  borderBottom: '1px solid #323238',
  marginBottom: '3.2rem',

  '&:hover': {
    strong: {
      color: '$yellow',
    },
  },
});

export const Time = styled('time', {
  color: '$text',
  fontSize: '$2',

});

export const Title = styled('strong', {
  color: '$title',
  fontSize: '$5',
  fontWeight: 'bold',
  margin: '2.4rem 0 0.4rem',
  transition: 'color 0.5s ease',

});

export const Content = styled('p', {
  color: '$title',
  fontSize: '$2',
  lineHeight: 1.7,
  marginBottom: '3.2rem',
});
