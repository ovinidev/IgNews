import type { NextPage } from 'next';
import Head from 'next/head';
import { globalStyles } from '../styles/global';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Início ig.News</title>
    </Head>
    {globalStyles()}
  </>
);

export default Home;
