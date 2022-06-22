import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { fontFace, GlobalStyle } from '@/styles/GlobalStyle';
import Theme from '@/styles/Theme';

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <style>{fontFace}</style>

        <title>Boated</title>
        <meta name="description" content="Welcome to Boated" />
      </Head>

      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
          </Hydrate>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
