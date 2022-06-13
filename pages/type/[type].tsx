import { FC } from 'react';
import Head from 'next/head';
import { dehydrate, QueryClient } from 'react-query';
import { useRouter } from 'next/router';
import { TransactionType } from '../api/types/TransactionType';
import Layout, { siteTitle } from '../../lib/ui/layout/Layout';
import { TypeDetail } from '../../lib/feature/detail/TypeDetail';
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

export async function getStaticPaths() {
  return {
    paths: [
      { params: { type: TransactionType.Credit } },
      { params: { type: TransactionType.StandingOrder } },
      { params: { type: TransactionType.Payment } },
    ],
    fallback: true,
  }
}

const Detail: FC = () => {
  const router = useRouter();
  const { type } = router.query;

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <TypeDetail type={type as TransactionType} />
    </Layout>
  );
};

export default Detail;
