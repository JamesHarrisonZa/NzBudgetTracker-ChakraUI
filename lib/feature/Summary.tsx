import { FC } from 'react';
import { SimpleGrid, VStack, Text } from '@chakra-ui/react';
import { CategoryStat } from './CategoryStat';
import FormattedDate from '../ui/FormattedDate';
import { TransactionCategory } from '../util/transaction-categories';

export const Summary: FC = () => {
  const todayDate = new Date();

  return (
    <VStack w="full" h="full" p={10} spacing={10}>
      <Text as="b">
        <FormattedDate date={todayDate} />
      </Text>
      <Text as="b">Amounts spent this month</Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <CategoryStat label="on food" category={TransactionCategory.Food} />
        <CategoryStat label="on health" category={TransactionCategory.Health} />
        <CategoryStat
          label="on utilities"
          category={TransactionCategory.Utilities}
        />
        <CategoryStat
          label="on transport"
          category={TransactionCategory.Transport}
        />
        <CategoryStat
          label="on lifestyle"
          category={TransactionCategory.Lifestyle}
        />
        <CategoryStat
          label="on household"
          category={TransactionCategory.Household}
        />
        <CategoryStat
          label="on professionalFees"
          category={TransactionCategory.ProfessionalFees}
        />
      </SimpleGrid>
    </VStack>
  );
};
