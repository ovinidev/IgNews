import Head from 'next/head';
import {
  Container, PostContainer, Time, Title, Content,
} from './styles';

export default function Posts() {
  return (
    <Container>
      <Head>
        <title>Posts</title>
      </Head>

      <PostContainer href="/">
        <Time>12 de março de 2021</Time>
        <Title>Creating a Monorepo with Lerna & Yarn Workspaces</Title>
        <Content>
          In this guide, you will learn how to create a Monorepo
          to manage multiple packages with a shared build, test, and
          release process.
          In this guide, you will learn how to create a Monorepo
          to manage multiple packages with a shared build, test, and
          release process.
        </Content>
      </PostContainer>

      <PostContainer href="/">
        <Time>12 de março de 2021</Time>
        <Title>Creating a Monorepo with Lerna & Yarn Workspaces</Title>
        <Content>
          In this guide, you will learn how to create a Monorepo
          to manage multiple packages with a shared build, test, and
          release process.
        </Content>
      </PostContainer>

      <PostContainer href="/">
        <Time>12 de março de 2021</Time>
        <Title>Creating a Monorepo with Lerna & Yarn Workspaces</Title>
        <Content>
          In this guide, you will learn how to create a Monorepo
          to manage multiple packages with a shared build, test, and
          release process.
        </Content>
      </PostContainer>

      <PostContainer href="/">
        <Time>12 de março de 2021</Time>
        <Title>Creating a Monorepo with Lerna & Yarn Workspaces</Title>
        <Content>
          In this guide, you will learn how to create a Monorepo
          to manage multiple packages with a shared build, test, and
          release process.
        </Content>
      </PostContainer>

      <PostContainer href="/">
        <Time>12 de março de 2021</Time>
        <Title>Creating a Monorepo with Lerna & Yarn Workspaces</Title>
        <Content>
          In this guide, you will learn how to create a Monorepo
          to manage multiple packages with a shared build, test, and
          release process.
        </Content>
      </PostContainer>

    </Container>
  );
}
