import { styled } from '../../styles/stitches.config';

export const Container = styled('main', {
  background: '$background',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

export const PostContent = styled('main', {
  maxWidth: '72.8rem',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',
  marginTop: '8rem',

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

  variants: {
    size: {
      large: {
        fontSize: '$6',
        margin: '0 0 2.4rem',

      },
    },
  },

});

export const Content = styled('p', {
  color: '$title',
  fontSize: '$2',
  lineHeight: 1.7,
  marginBottom: '3.2rem',

  variants: {
    size: {
      medium: {
        fontSize: '$3',
      },
    },
  },
});

export const Article = styled('article', {
  fontSize: '$3',
  color: '$title',
  lineHeight: '3.2rem',

  'p, ul': {
    margin: '2.8rem 0',
  },

  ul: {
    paddingLeft: '3.2rem',

    li: {
      margin: '0.8rem 0',
    },
  },
});
