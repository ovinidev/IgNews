import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

import { getCssText } from '../styles/stitches.config';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />

          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />

          <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
