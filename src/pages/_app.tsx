/* eslint-disable require-jsdoc */
import type {AppProps} from 'next/app';

function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
