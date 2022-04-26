import { ChakraProvider } from '@chakra-ui/react';
import { CalendarDefaultTheme } from '@uselessdev/datepicker';
import { QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={CalendarDefaultTheme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
