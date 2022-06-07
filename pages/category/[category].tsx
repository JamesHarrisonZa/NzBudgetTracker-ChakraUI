import { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout, { siteTitle } from '../../lib/ui/layout/Layout';
import { CategoryDetail } from '../../lib/feature/detail/CategoryDetail';
import { TransactionCategory } from '../api/types/TransactionCategory';

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
