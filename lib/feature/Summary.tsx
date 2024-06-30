import { FC } from 'react';
import { SimpleGrid, VStack, Text } from '@chakra-ui/react';
import { DateRangePopover } from './date/DateRangePopover';
import { TypeStat } from './stat/TypeStat';
import { AlcoholStat } from './stat/AlcoholStat';
import { FastFoodStat } from './stat/FastFoodStat';
import { CategoryGroupStat } from './stat/CategoryGroupStat';
import { UtilitiesStat } from './stat/UtilitiesStat';
import { GroceriesStat } from './stat/GroceriesStat';
import { EntertainmentStat } from './stat/EntertainmentStat';
import { TransactionType, TransactionCategoryGroupName } from '../../pages/api';

export const Summary: FC = () => {
  return (
    <VStack w="full" h="full" p={10} spacing={10}>
      <DateRangePopover />
      <TypeStat label="Income" type={TransactionType.Credit} />

      <SimpleGrid columns={{ sm: 2, md: 2 }} spacing={10}>
        <TypeStat label="Debit Orders" type={TransactionType.StandingOrder} />
        <TypeStat label="Payments" type={TransactionType.Payment} />
      </SimpleGrid>

      <Text as="b" margin="0">
        Named categories
      </Text>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 5 }} spacing={10}>
        <UtilitiesStat />
        <EntertainmentStat />
        <GroceriesStat />
        <AlcoholStat />
        <FastFoodStat />
      </SimpleGrid>

      <Text as="b">Grouped categories</Text>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 5, xl: 7 }} spacing={10}>
        <CategoryGroupStat
          label="Food"
          categoryGroupName={TransactionCategoryGroupName.Food}
        />
        <CategoryGroupStat
          label="Health"
          categoryGroupName={TransactionCategoryGroupName.Health}
        />
        <CategoryGroupStat
          label="Utilities"
          categoryGroupName={TransactionCategoryGroupName.Utilities}
        />
        <CategoryGroupStat
          label="Transport"
          categoryGroupName={TransactionCategoryGroupName.Transport}
        />
        <CategoryGroupStat
          label="Lifestyle"
          categoryGroupName={TransactionCategoryGroupName.Lifestyle}
        />
        <CategoryGroupStat
          label="Household"
          categoryGroupName={TransactionCategoryGroupName.Household}
        />
        <CategoryGroupStat
          label="Professional Fees"
          categoryGroupName={TransactionCategoryGroupName.ProfessionalServices}
        />
      </SimpleGrid>
    </VStack>
  );
};
