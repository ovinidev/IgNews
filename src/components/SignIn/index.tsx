import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { Container } from './styles';

export const SignIn = () => {
  const userLogged = false;

  return userLogged ? (
    <Container type="button">
      <FaGithub color="#04D361" />
      tiagoluchtenberg
      <FiX />
    </Container>
  ) : (
    <Container type="button">
      <FaGithub color="#EBA417" />
      Sign in with GitHub
    </Container>
  );
};
