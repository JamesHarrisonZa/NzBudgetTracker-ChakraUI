import { FC } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../../lib/ui/layout/Layout';
import { TransactionCategory } from '../api/types/TransactionCategory';
import { CategoriesDetail } from '../../lib/feature/detail/CategoriesDetail';

const FastFoodDetail: FC = () => {
  const heading = 'Fast Food';
  const categories = [
    TransactionCategory.FastFoodRestaurants,
    TransactionCategory.CafesAndRestaurants,
    TransactionCategory.IceCreamGelatoCandyNutAndConfectioneryStores,
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

export default FastFoodDetail;
