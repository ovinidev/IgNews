/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { stripe } from '../services/stripe';
import {
  Container, Content, SubscribeButton, TextContainer,
} from '../styles/home';

interface HomeProps {
  product: {
    amount: number,
    priceId: string
  }
}

export default function Home({ product }: HomeProps) {
  return (
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
            <span>for {product.amount} month</span>
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
}

// Always utility this function in pages and not in components
export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1KbCrvC9t6FtgstyuOsTFarD');

  const priceAmount = price.unit_amount || 8;

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(priceAmount / 100),
  };

  return {
    props: {
      product,
    },
  };
};
