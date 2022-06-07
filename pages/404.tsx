import { FC } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Button, Heading, VStack } from '@chakra-ui/react';
import Layout, { siteTitle } from '../lib/ui/layout/Layout';

const NotFound: FC = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    <VStack w="full" h="full" p={10} spacing={10}>
      <Heading> Page Not Found or not build yet... </Heading>
      <iframe
        src='https://giphy.com/embed/WTL02R1L7YCGUEunFy'
        width='480'
        height='480'
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <Link href={'/'} passHref>
        
        <Button colorScheme="blue" minWidth="110px">
          Go back home
        </Button>
      </Link>
    </VStack>
    </Layout>
  );
};

export default NotFound;