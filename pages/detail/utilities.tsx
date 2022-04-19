import { FC } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../../lib/ui/layout/Layout';
import { TransactionCategory } from '../api/types/TransactionCategory';
import { CategoriesDetail } from '../../lib/feature/detail/CategoriesDetail';

const UtilitiesDetail: FC = () => {
  const heading = 'Utilities';
  const categories = [
    TransactionCategory.ElectricityGasAndWater,
    TransactionCategory.TelecommunicationServices,
    TransactionCategory.UtilisingElectricGasWaterAndSanitary,
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

export default UtilitiesDetail;
