import { SimpleGrid, VStack, Text, Box } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import FormattedDate from '../components/FormattedDate';
import { Transaction } from './api/akahu';
import Layout, { siteTitle } from '../components/layout/Layout';
import {
  getFastFoodTransactions,
  getGroceryTransactions,
  getUtilityTransactions,
} from '../lib/filter-transactions';

const Home: FC = () => {
  const todayDate = new Date();

  const [transactions, setTransactions] = useState([] as Transaction[]);

  useEffect(() => {
    //TODO: MOVE to data-access lib
    axios.get<Transaction[]>('/api/akahu').then((response) => {
      setTransactions(response.data);
    });
  });

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
