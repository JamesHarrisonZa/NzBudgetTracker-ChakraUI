import { FC } from 'react';
import { SimpleGrid, VStack, Text } from '@chakra-ui/react';
import { CategoryStat } from './CategoryStat';
import FormattedDate from '../ui/FormattedDate';
import { TransactionCategories } from '../util/transaction-categories';

export const Summary: FC = () => {
  const todayDate = new Date();

  return (
    <VStack w="full" h="full" p={10} spacing={10}>
      <Text as="b">
        <FormattedDate date={todayDate} />
      </Text>
      <Text as="b">Amounts spent this month</Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <CategoryStat label="on food" category={TransactionCategories.Food} />
        <CategoryStat
          label="on health"
          category={TransactionCategories.Health}
        />
        <CategoryStat
          label="on utilities"
          category={TransactionCategories.Utilities}
        />
        <CategoryStat
          label="on transport"
          category={TransactionCategories.Transport}
        />
        <CategoryStat
          label="on lifestyle"
          category={TransactionCategories.Lifestyle}
        />
        <CategoryStat
          label="on household"
          category={TransactionCategories.Household}
        />
        <CategoryStat
          label="on professionalFees"
          category={TransactionCategories.ProfessionalFees}
        />
      </SimpleGrid>
    </VStack>
  );
};
