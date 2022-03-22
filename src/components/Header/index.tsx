import Image from 'next/image';
import Link from 'next/link';
import { SignIn } from '../SignIn';
import {
  Container, Content, Nav, Item,
} from './styles';

export const Header = () => (
  <Container>
    <Content>
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          width={108.45}
          height={30.27}
        />
      </Link>

      <Nav>
        <Item href="/" selected>Home</Item>
        <Item href="/posts">Posts</Item>
      </Nav>

      <SignIn />
    </Content>
  </Container>
);
