import { useAtom } from 'jotai';
import { FC, useState } from 'react';
import { VStack, Text, Button, Stack } from '@chakra-ui/react';
import {
  getFirstOfDateThisMonth,
  getCurrentDateThisMonth,
  getFirstOfDateLastMonth,
  getLastOfDateLastMonth,
} from '../util/get-dates';
import FormattedDate from '../ui/FormattedDate';
import { startDateAtom, endDateAtom } from '../data-access/atoms/date-range';

export const MonthSelector: FC = () => {
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
    <>
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
    </>
  );
};
