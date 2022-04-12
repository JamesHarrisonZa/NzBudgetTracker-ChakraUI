import { FC } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../../lib/ui/layout/Layout';
import { CategoryDetail } from '../../lib/feature/CategoryDetail';
import { useRouter } from 'next/router';
import { TransactionCategory } from '../../lib/util/transaction-categories';

const Detail: FC = () => {
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

export default Detail;
