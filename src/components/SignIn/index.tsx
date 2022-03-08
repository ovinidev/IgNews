import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { Container } from './styles';

export const SignIn = () => {
  const userLogged = false;

  return userLogged ? (
    <Container type="button">
      <FaGithub />
      Sign in with GitHub
    </Container>
  ) : (
    <Container type="button">
      <FaGithub />
      tiagoluchtenberg
      <FiX />

    </Container>
  );
};
