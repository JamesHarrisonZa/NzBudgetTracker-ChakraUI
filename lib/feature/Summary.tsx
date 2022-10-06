import { FC } from 'react';
import { SimpleGrid, VStack, Text } from '@chakra-ui/react';
import { DatePopover } from './date/DatePopover';
import { TypeStat } from './stat/TypeStat';
import { AlcoholStat } from './stat/AlcoholStat';
import { FastFoodStat } from './stat/FastFoodStat';
import { CategoryStat } from './stat/CategoryStat';
import { UtilitiesStat } from './stat/UtilitiesStat';
import { GroceriesStat } from './stat/GroceriesStat';
import { EntertainmentStat } from './stat/EntertainmentStat';
import { TransactionType, TransactionCategory } from '../../pages/api';

export const Summary: FC = () => {
  return (
    <VStack w="full" h="full" p={10} spacing={10}>
      <DatePopover />
      <TypeStat label="Income" type={TransactionType.Credit} />

      <SimpleGrid columns={{ sm: 2, md: 2 }} spacing={10}>
        <TypeStat label="Debit Orders" type={TransactionType.StandingOrder} />
        <TypeStat label="Payments" type={TransactionType.Payment} />
      </SimpleGrid>

      <Text as="b" margin="0">
        Grouped categories
      </Text>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 5 }} spacing={10}>
        <UtilitiesStat />
        <EntertainmentStat />
        <GroceriesStat />
        <AlcoholStat />
        <FastFoodStat />
      </SimpleGrid>

      <Text as="b">High level categories</Text>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 5, xl: 7 }} spacing={10}>
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
