import { FC } from 'react';
import {
  SimpleGrid,
  VStack,
  Text,
  Box,
  StatLabel,
  Stat,
  StatNumber,
} from '@chakra-ui/react';
import FormattedDate from '../ui/FormattedDate';
import { useAccountTransactions } from '../data-access/useAccountTransactions';
import {
  getFastFoodTransactions,
  getGroceryTransactions,
  getUtilityTransactions,
} from '../util/get-filtered-transactions';
import { getTransactionsTotal } from '../util/get-transactions-total';

export const Summary: FC = () => {
  const todayDate = new Date();

  const { transactions, isLoading, isError } = useAccountTransactions();

  const groceryTransactions = getGroceryTransactions(transactions);
  const groceriesTotal = getTransactionsTotal(groceryTransactions);

  const fastFoodTransactions = getFastFoodTransactions(transactions);
  const fastFoodTotal = getTransactionsTotal(fastFoodTransactions);

  const utilityTransactions = getUtilityTransactions(transactions);
  const utilitiesTotal = getTransactionsTotal(utilityTransactions);

  return (
    <VStack w="full" h="full" p={10} spacing={10}>
      <Text as="b">
        <FormattedDate date={todayDate} />
      </Text>
      <Text as="b">Amounts spent this month</Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Stat>
          <StatLabel>on groceries</StatLabel>
          <StatNumber>${groceriesTotal}</StatNumber>
        </Stat>

        <Stat>
          <StatLabel>on fast food</StatLabel>
          <StatNumber>${fastFoodTotal}</StatNumber>
        </Stat>

        <Stat>
          <StatLabel>on utilities</StatLabel>
          <StatNumber>${utilitiesTotal}</StatNumber>
        </Stat>
      </SimpleGrid>
    </VStack>
  );
};
