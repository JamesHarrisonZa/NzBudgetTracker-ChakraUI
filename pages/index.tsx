import { FC } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../lib/ui/layout/Layout';
import { Summary } from '../lib/feature/Summary';

const Home: FC = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Summary />
    </Layout>
  );
};

export default Home;
