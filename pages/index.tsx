import { FC } from 'react';
import Head from 'next/head';
import { dehydrate, QueryClient } from 'react-query';
import Layout, { siteTitle } from '../lib/ui/layout/Layout';
import { Summary } from '../lib/feature/Summary';
import { prefetchAccountTransactions } from '../lib/data-access/useAccountTransactions';

export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await prefetchAccountTransactions(queryClient);

  const tenMinutes = 10 * 60 * 1000;
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: tenMinutes,
  }
}

const Home: FC = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Summary />
    </Layout>
  );
};

export default Home;
