import Router from 'next/router';
import Head from "next/head";
import NProgress from 'nprogress';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme.js';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>

      </Head>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}
export default MyApp
