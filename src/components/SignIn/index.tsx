import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Container } from './styles';

export const SignIn = () => {
  const { data: session } = useSession();

  return session ? (
    <Container type="button" onClick={() => signOut()}>
      <FaGithub color="#04D361" />
      {session.user?.name}
      <FiX />
    </Container>
  ) : (
    <Container type="button" onClick={() => signIn('github')}>
      <FaGithub color="#EBA417" />
      Sign in with GitHub
    </Container>
  );
};
