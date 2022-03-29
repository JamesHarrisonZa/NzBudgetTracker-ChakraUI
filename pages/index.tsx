import { SimpleGrid, VStack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import Head from 'next/head';
import FormattedDate from '../components/FormattedDate';
import Layout, { siteTitle } from '../components/layout/Layout';

const Home: FC = () => {
  const todayDate = new Date();

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <VStack w="full" h="full" p={10} spacing={10}>
        <Text as="b">
          <FormattedDate date={todayDate} />
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Text>{'1'}</Text>
          <Text>{'2'}</Text>
          <Text>{'3'}</Text>
        </SimpleGrid>
      </VStack>
    </Layout>
  );
};

export default Home;
