import Document, { Html, Head, Main, NextScript } from 'next/document';
// import wrapper from '@/redux'
// import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
