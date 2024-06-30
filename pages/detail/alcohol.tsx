import { FC } from 'react';
import Head from 'next/head';
import { dehydrate, QueryClient } from 'react-query';
import Layout, { siteTitle } from '../../lib/ui/layout/Layout';
import { CategoryNamesDetail } from '../../lib/feature/detail/CategoryNamesDetail';
import { categoryNames } from '../../lib/feature/stat/AlcoholStat';
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
  };
};

const AlcoholDetail: FC = () => {
  const heading = 'Alcohol';

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <CategoryNamesDetail categoryNames={categoryNames} heading={heading} />
    </Layout>
  );
};

export default AlcoholDetail;
