import { FC } from 'react';
import { SimpleGrid, VStack, Text } from '@chakra-ui/react';
import { TransactionType } from '../../pages/api/types/TransactionType';
import { TransactionCategory } from '../../pages/api/types/TransactionCategory';
import { TypeStat } from './stats/TypeStat';
import { CategoryStat } from './stats/CategoryStat';
import { MonthSelector } from './MonthSelector';
import FormattedDate from '../ui/FormattedDate';
import { GroceriesStat } from './stats/GroceriesStat';

export const Summary: FC = () => {
  const todayDate = new Date();

  return (
    <VStack w="full" h="full" p={10} spacing={10}>
      <Text as="b">
        <FormattedDate date={todayDate} includeYear />
      </Text>
      <MonthSelector />

      <TypeStat label="Credit" type={TransactionType.Credit} />

      <Text as="b">Amounts spent</Text>
      <SimpleGrid columns={{ sm: 1, md: 3, lg: 5 }} spacing={10}>
        <TypeStat label="Debit Orders" type={TransactionType.StandingOrder} />
        <TypeStat label="Payments" type={TransactionType.Payment} />
        <GroceriesStat />
        <CategoryStat label="Food" category={TransactionCategory.Food} />
        <CategoryStat label="Health" category={TransactionCategory.Health} />
        <CategoryStat
          label="Utilities"
          category={TransactionCategory.Utilities}
        />
        <CategoryStat
          label="Transport"
          category={TransactionCategory.Transport}
        />
        <CategoryStat
          label="Lifestyle"
          category={TransactionCategory.Lifestyle}
        />
        <CategoryStat
          label="Household"
          category={TransactionCategory.Household}
        />
        <CategoryStat
          label="Professional Fees"
          category={TransactionCategory.ProfessionalFees}
        />
      </SimpleGrid>
    </VStack>
  );
};
