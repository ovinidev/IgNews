import Image from 'next/image';
import { SignIn } from '../SignIn';
import {
  Container, Content, Nav, Item,
} from './styles';

export const Header = () => (
  <Container>
    <Content>
      <Image
        src="/logo.svg"
        alt="logo"
        width={108.45}
        height={30.27}
      />
      <Nav>
        <Item href="/" selected>Home</Item>
        <Item href="/">Posts</Item>
      </Nav>

      <SignIn />
    </Content>
  </Container>
);
