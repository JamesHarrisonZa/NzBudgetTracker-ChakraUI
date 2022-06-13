import { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from 'react-query';
import Layout, { siteTitle } from '../../lib/ui/layout/Layout';
import { CategoryDetail } from '../../lib/feature/detail/CategoryDetail';
import { TransactionCategory } from '../api/types/TransactionCategory';
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
      { params: { category: TransactionCategory.Utilities } },
      { params: { category: TransactionCategory.Transport } },
      { params: { category: TransactionCategory.Lifestyle } },
      { params: { category: TransactionCategory.Household } },
      { params: { category: TransactionCategory.ProfessionalFees } },
    ],
    fallback: true,
  }
}

const Category: FC = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <CategoryDetail category={category as TransactionCategory} />
    </Layout>
  );
};

export default Category;
