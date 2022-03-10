import type { AppProps } from 'next/app';
import { SessionProvider as NextAuthProvider } from 'next-auth/react';
import { Header } from '../components/Header';
import { dark, ThemeProvider } from '../styles/stitches.config';
import { globalStyles } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ThemeProvider className={dark}>
        {globalStyles()}
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </NextAuthProvider>
  );
}

export default MyApp;
