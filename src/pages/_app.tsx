import Head from 'next/head';
import '@styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Elton Pongilo - I make cool and expressive things for the internet</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
