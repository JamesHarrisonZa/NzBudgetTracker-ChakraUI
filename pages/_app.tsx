import { useState } from 'react';
import { NextPage } from 'next';
import type { AppProps as NextAppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { CalendarDefaultTheme } from '@uselessdev/datepicker';

type AppProps<P = any> = {
  pageProps: P;
  Component: NextPage;
} & Omit<NextAppProps<P>, 'pageProps'>;

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ChakraProvider theme={CalendarDefaultTheme}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
