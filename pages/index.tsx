import { SimpleGrid, VStack, Text, Box } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import Head from 'next/head';
import FormattedDate from '../components/FormattedDate';
import Layout, { siteTitle } from '../components/layout/Layout';
import {
  getFastFoodTransactions,
  getGroceryTransactions,
  getUtilityTransactions,
} from '../lib/util/filter-transactions';
import { useAccountTransactions } from '../lib/data-access/useAccountTransactions';

const Home: FC = () => {
  const todayDate = new Date();

  const { transactions, isLoading, isError } = useAccountTransactions();

  const groceryTransactions = getGroceryTransactions(transactions);
  const groceriesTotal = groceryTransactions.reduce(
    //TODO MOVE to utilities
    (prev, curr) => prev + curr.amount,
    0
  );

  const fastFoodTransactions = getFastFoodTransactions(transactions);
  const fastFoodTotal = fastFoodTransactions.reduce(
    //TODO MOVE to utilities
    (prev, curr) => prev + curr.amount,
    0
  );

  const utilityTransactions = getUtilityTransactions(transactions);
  const utilitiesTotal = utilityTransactions.reduce(
    //TODO MOVE to utilities
    (prev, curr) => prev + curr.amount,
    0
  );

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
