import { SimpleGrid, VStack, Text, Box } from '@chakra-ui/react';
import { FC } from 'react';
import Head from 'next/head';
import FormattedDate from '../components/FormattedDate';
import Layout, { siteTitle } from '../components/layout/Layout';
import {
  getFastFoodTransactions,
  getGroceryTransactions,
  getUtilityTransactions,
} from '../lib/util/get-filtered-transactions';
import { useAccountTransactions } from '../lib/data-access/useAccountTransactions';
import { getTransactionsTotal } from '../lib/util/get-transactions-total';

const Home: FC = () => {
  const todayDate = new Date();

  const { transactions, isLoading, isError } = useAccountTransactions();

  const groceryTransactions = getGroceryTransactions(transactions);
  const groceriesTotal = getTransactionsTotal(groceryTransactions);

  const fastFoodTransactions = getFastFoodTransactions(transactions);
  const fastFoodTotal = getTransactionsTotal(fastFoodTransactions);

  const utilityTransactions = getUtilityTransactions(transactions);
  const utilitiesTotal = getTransactionsTotal(utilityTransactions);

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <VStack w="full" h="full" p={10} spacing={10}>
        <Text as="b">
          <FormattedDate date={todayDate} />
        </Text>
        <Text as="b">Amounts spent this month</Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box>on groceries: ${groceriesTotal}</Box>
          <Box>on fast food: ${fastFoodTotal}</Box>
          <Box>on utilities: ${utilitiesTotal}</Box>
        </SimpleGrid>
      </VStack>
    </Layout>
  );
};

export default Home;
