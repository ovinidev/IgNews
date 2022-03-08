import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { dark, ThemeProvider } from '../styles/stitches.config';
import { globalStyles } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider className={dark}>
      {globalStyles()}
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
