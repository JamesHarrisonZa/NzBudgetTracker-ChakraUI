import { useAtom } from 'jotai';
import { ChangeEvent, useRef, useState, useEffect, FC } from 'react';
import { format, isAfter, isBefore, isValid } from 'date-fns';
import {
  Box,
  Flex,
  Input,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
  useOutsideClick,
} from '@chakra-ui/react';
import {
  Calendar,
  CalendarControls,
  CalendarDate,
  CalendarDays,
  CalendarMonth,
  CalendarMonthName,
  CalendarMonths,
  CalendarNextButton,
  CalendarPrevButton,
  CalendarValues,
  CalendarWeek,
} from '@uselessdev/datepicker';
import { endDateAtom, startDateAtom } from '../data-access/atoms/date-range';

export const DateRangePicker: FC = () => {
  const [startDate, setStartDate] = useAtom(startDateAtom);
  const [endDate, setEndDate] = useAtom(endDateAtom);

  const [dates, setDates] = useState<CalendarValues>({
    start: startDate,
    end: endDate,
  });

  const numberOfMonthsToDisplay = 1;

  const handleSelectDate = (dates: CalendarValues | CalendarDate) => {
    setDates(dates as CalendarValues);
    setStartDate((dates as CalendarValues).start as Date);
    setEndDate((dates as CalendarValues).end as Date);
  };

  return (
    <Calendar
      value={dates}
      onSelectDate={handleSelectDate}
      months={numberOfMonthsToDisplay}
    >
      <CalendarControls>
        <CalendarPrevButton />
        <CalendarNextButton />
      </CalendarControls>

      <CalendarMonths>
        {[...Array(numberOfMonthsToDisplay).keys()].map((month) => (
          <CalendarMonth month={month} key={month}>
            <CalendarMonthName />
            <CalendarWeek />
            <CalendarDays />
          </CalendarMonth>
        ))}
      </CalendarMonths>
    </Calendar>
  );
};
