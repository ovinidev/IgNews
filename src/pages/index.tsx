/* eslint-disable react/jsx-one-expression-per-line */
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {
  Container, Content, SubscribeButton, TextContainer,
} from './home';

const Home: NextPage = () => (
  <Container>
    <Head>
      <title>Home ig.News</title>
    </Head>

    <Content>
      <TextContainer>
        <span>👋 Hey, welcome</span>
        <h1>News about the <span>React</span> world.</h1>
        <p>
          Get access to all the publications <br />
          <span>for $9,90 month</span>
        </p>
        <SubscribeButton type="button">Subscribe now</SubscribeButton>
      </TextContainer>
      <Image
        src="/avatar.svg"
        height={520}
        width={334}
        alt="girl coding"
      />
    </Content>
  </Container>
);

export default Home;
