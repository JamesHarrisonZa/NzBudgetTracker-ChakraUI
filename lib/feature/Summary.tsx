import { FC, useState } from 'react';
import { SimpleGrid, VStack, Text, Button, Stack } from '@chakra-ui/react';
import { CategoryStat } from './CategoryStat';
import FormattedDate from '../ui/FormattedDate';
import { TransactionCategory } from '../../pages/api/types/TransactionCategory';
import {
  getFirstOfDateThisMonth,
  getCurrentDateThisMonth,
  getFirstOfDateLastMonth,
  getLastOfDateLastMonth,
} from '../util/get-dates';
import { useAtom } from 'jotai';
import { startDateAtom, endDateAtom } from '../data-access/atoms/date-range';
import { TypeStat } from './TypeStat';
import { TransactionType } from '../../pages/api/types/TransactionType';

export const Summary: FC = () => {
  const todayDate = new Date();

  const [isThisMonthDateRange, setIsThisMonthDateRange] = useState(true);
  const [isLastMonthDateRange, setIsLastMonthDateRange] = useState(false);

  const [_startDate, setStartDate] = useAtom(startDateAtom);
  const [_endDate, setEndDate] = useAtom(endDateAtom);

  const setDateRangeToThisMonth = () => {
    setStartDate(getFirstOfDateThisMonth());
    setEndDate(getCurrentDateThisMonth());
  };

  const setDateRangeToLastMonth = () => {
    setStartDate(getFirstOfDateLastMonth());
    setEndDate(getLastOfDateLastMonth());
  };

  const handleThisMonthOnClick = () => {
    if (isThisMonthDateRange) {
      return;
    }
    setIsThisMonthDateRange(true);
    setIsLastMonthDateRange(false);
    setDateRangeToThisMonth();
  };

  const handleLastMonthOnClick = () => {
    if (isLastMonthDateRange) {
      return;
    }
    setIsThisMonthDateRange(false);
    setIsLastMonthDateRange(true);
    setDateRangeToLastMonth();
  };

  return (
    <VStack w="full" h="full" p={10} spacing={10}>
      <Text as="b">
        <FormattedDate date={todayDate} includeYear />
      </Text>
      <Stack direction="row" spacing={4} align="center">
        <Button
          colorScheme="teal"
          variant={isLastMonthDateRange ? 'solid' : 'outline'}
          onClick={handleLastMonthOnClick}
        >
          last month
        </Button>
        <Button
          colorScheme="teal"
          variant={isThisMonthDateRange ? 'solid' : 'outline'}
          onClick={handleThisMonthOnClick}
        >
          this month
        </Button>
      </Stack>
      <TypeStat label="Credit" type={TransactionType.Credit} />

      <Text as="b">Amounts spent</Text>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <TypeStat label="Debit Orders" type={TransactionType.StandingOrder} />
        <TypeStat label="Payments" type={TransactionType.Payment} />
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
