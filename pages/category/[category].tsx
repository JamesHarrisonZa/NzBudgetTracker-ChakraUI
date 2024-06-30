import { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from 'react-query';
import Layout, { siteTitle } from '../../lib/ui/layout/Layout';
import { CategoryGroupDetail } from '../../lib/feature/detail/CategoryGroupDetail';
import { TransactionCategoryGroupName } from '../api/types/TransactionCategory';
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

export async function getStaticPaths() {
  return {
    paths: [
      { params: { category: TransactionCategoryGroupName.Utilities } },
      { params: { category: TransactionCategoryGroupName.Transport } },
      { params: { category: TransactionCategoryGroupName.Lifestyle } },
      { params: { category: TransactionCategoryGroupName.Household } },
      {
        params: { category: TransactionCategoryGroupName.ProfessionalServices },
      },
    ],
    fallback: true,
  };
}

const Category: FC = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <CategoryGroupDetail
        categoryGroupName={category as TransactionCategoryGroupName}
      />
    </Layout>
  );
};

export default Category;
