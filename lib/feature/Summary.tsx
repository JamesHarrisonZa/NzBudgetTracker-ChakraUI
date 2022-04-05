import { FC } from 'react';
import {
  SimpleGrid,
  VStack,
  Text,
  StatLabel,
  Stat,
  StatNumber,
} from '@chakra-ui/react';
import FormattedDate from '../ui/FormattedDate';
import { TransactionCategories } from '../util/transaction-categories';
import { CategoryStat } from './CategoryStat';

export const Summary: FC = () => {
  const todayDate = new Date();

  return (
    <VStack w="full" h="full" p={10} spacing={10}>
      <Text as="b">
        <FormattedDate date={todayDate} />
      </Text>
      <Text as="b">Amounts spent this month</Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <CategoryStat
          label="on groceries"
          category={TransactionCategories.GroceryStoresAndSupermarkets}
        />
        <CategoryStat
          label="on fast food"
          category={TransactionCategories.FastFoodRestaurants}
        />
        <CategoryStat
          label="on utilities"
          category={TransactionCategories.Utilities}
        />
      </SimpleGrid>
    </VStack>
  );
};
