import { FC } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../../lib/ui/layout/Layout';
import { TransactionCategory } from '../api/types/TransactionCategory';
import { CategoriesDetail } from '../../lib/feature/detail/CategoriesDetail';

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
