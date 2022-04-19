import { FC } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../../lib/ui/layout/Layout';
import { TypeDetail } from '../../lib/feature/detail/TypeDetail';
import { useRouter } from 'next/router';
import { TransactionType } from '../api/types/TransactionType';

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
