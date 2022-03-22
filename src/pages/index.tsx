/* eslint-disable no-shadow */
/* eslint-disable no-useless-return */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
import type { GetStaticProps } from 'next';
import { signIn, useSession } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';
import { axiosInstance } from '../services/axiosInstance';
import stripe from '../services/stripe';
import { getStripeJs } from '../services/stripe-js';
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
  const { data: session } = useSession();

  const handleSubscribe = async () => {
    if (!session) {
      signIn('github');
      return;
    }
    try {
      const response = await axiosInstance.post('subscribe');
      console.log('stripe');

      const { sessionId } = response.data;

      const stripe = await getStripeJs();
      console.log(stripe);

      await stripe?.redirectToCheckout({ sessionId });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Head>
        <title>Home ig.News</title>
      </Head>

      <Content>
        <TextContainer>
          <span>👋 Hey {session?.user?.name}, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton type="button" onClick={handleSubscribe}>
            Subscribe now
          </SubscribeButton>
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
export const getStaticProps: GetStaticProps = async () => {
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
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
