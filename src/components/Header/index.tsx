import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SignIn } from '../SignIn';
import {
  Container, Content, Nav, Item,
} from './styles';

export const Header = () => {
  const { asPath } = useRouter();

  return (

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
          <Link href="/">
            <Item selected={asPath === '/'}>Home</Item>
          </Link>
          <Link href="/posts">
            <Item selected={asPath === '/posts'}>Posts</Item>
          </Link>
        </Nav>

        <SignIn />
      </Content>
    </Container>
  );
};
