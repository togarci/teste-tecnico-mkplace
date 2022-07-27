import type { AppProps } from "next/app";
import Head from "next/head";
import '../styles/main.scss';
import 'bootstrap/dist/css/bootstrap.css'
import { AppProvider } from '../ContextApp';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Teste Técnico Frontend - MKPLACE</title>
        <link rel="icon" href="/favicon-mkplace.ico" />
      </Head>

      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
