import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Elton Pongilo - I make cool and expressive things for the internet
        </title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
