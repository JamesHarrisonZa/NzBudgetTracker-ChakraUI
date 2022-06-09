import { FC } from 'react';
import Head from 'next/head';
import { dehydrate, QueryClient } from 'react-query';
import Layout, { siteTitle } from '../lib/ui/layout/Layout';
import { Summary } from '../lib/feature/Summary';
import { getCurrentDateThisMonth, getFirstOfDateThisMonth, getFormattedDate } from '../lib/util';
import { fetchAkahuTransactions } from './api/akahu';

const tenMinutes = 10 * 60 * 1000;

export const getStaticProps = async () => {
  const startDate = getFormattedDate(getFirstOfDateThisMonth());
  const endDate = getFormattedDate(getCurrentDateThisMonth());
  const fetchData = async() => await fetchAkahuTransactions(startDate, endDate);

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['transactions', startDate, endDate], fetchData)

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
