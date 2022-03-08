import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { dark, ThemeProvider } from '../styles/stitches.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider className={dark}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
