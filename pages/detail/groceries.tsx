import { FC } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../../lib/ui/layout/Layout';
import { TransactionCategory } from '../api/types/TransactionCategory';
import { CategoriesDetail } from '../../lib/feature/detail/CategoriesDetail';

const GroceriesDetail: FC = () => {
  const heading = 'Groceries';
  const categories = [
    TransactionCategory.GroceryStoresAndSupermarkets,
    TransactionCategory.SupermarketAndGroceryStores,
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

export default GroceriesDetail;
