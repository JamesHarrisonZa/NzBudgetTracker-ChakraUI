import { FC } from 'react';
import Head from 'next/head';
import { dehydrate, QueryClient } from 'react-query';
import Layout, { siteTitle } from '../../lib/ui/layout/Layout';
import { TransactionCategory } from '../api/types/TransactionCategory';
import { CategoriesDetail } from '../../lib/feature/detail/CategoriesDetail';
import { prefetchAccountTransactions } from '../../lib/data-access/useAccountTransactions';

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
};

const EntertainmentDetail: FC = () => {
  const heading = 'Entertainment';
  const categories = [
    TransactionCategory.CableServices,
    TransactionCategory.EntertainmentNEC,
    TransactionCategory.RadioAndTelevisionServices,
  ];

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <CategoriesDetail categories={categories} heading={heading} />
    </Layout>
  );
};

export default EntertainmentDetail;
