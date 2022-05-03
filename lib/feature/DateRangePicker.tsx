import { useAtom } from 'jotai';
import { ChangeEvent, useRef, useState, useEffect } from 'react';
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

export const DateRangePicker = () => {
  const [startDate, setStartDate] = useAtom(startDateAtom);
  const [endDate, setEndDate] = useAtom(endDateAtom);

  const [dates, setDates] = useState<CalendarValues>({
    start: startDate,
    end: endDate,
  });
  const [values, setValues] = useState({
    start: format(startDate, 'MM/dd/yyyy'),
    end: format(endDate, 'MM/dd/yyyy'),
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const calendarRef = useRef(null);
  const startInputRef = useRef<HTMLInputElement>(null);
  const endInputRef = useRef<HTMLInputElement>(null);

  const numberOfMonthsToDisplay = 2;

  const handleSelectDate = (dates: CalendarValues | CalendarDate) => {
    dates = dates as CalendarValues;
    setDates(dates);

    setValues({
      start: isValid(dates.start)
        ? format(dates.start as Date, 'MM/dd/yyyy')
        : '',
      end: isValid(dates.end) ? format(dates.end as Date, 'MM/dd/yyyy') : '',
    });

    if (dates.end) {
      onClose();
    }
  };

  const match = (value: string) => value.match(/(\d{2})\/(\d{2})\/(\d{4})/);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });

    if (target.name === 'start' && match(target.value) && endInputRef.current) {
      endInputRef.current.focus();
    }
  };

  useOutsideClick({
    ref: calendarRef,
    handler: onClose,
    enabled: isOpen,
  });

  useEffect(() => {
    if (match(values.start)) {
      const startDate = new Date(values.start);
      const isValidStartDate = isValid(startDate);
      const isAfterEndDate = dates.end && isAfter(startDate, dates.end);

      if (isValidStartDate && isAfterEndDate) {
        setValues({ ...values, end: '' });
        return setDates({ end: undefined, start: startDate });
      }

      return setDates({ ...dates, start: startDate });
    }
  }, [values.start]);

  useEffect(() => {
    if (match(values.end)) {
      const endDate = new Date(values.end);
      const isValidEndDate = isValid(endDate);
      const isBeforeStartDate = dates.start && isBefore(endDate, dates.start);

      if (isValidEndDate && isBeforeStartDate) {
        setValues({ ...values, start: '' });

        startInputRef.current?.focus();

        return setDates({ start: undefined, end: endDate });
      }

      onClose();
      return setDates({ ...dates, end: endDate });
    }
  }, [values.end]);

  return (
    <Popover
      placement="auto-start"
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={initialRef}
      isLazy
    >
      <PopoverTrigger>
        <Flex
          w="400px"
          borderWidth={1}
          rounded="md"
          p={2}
          onClick={onOpen}
          ref={initialRef}
        >
          <Input
            variant="unstyled"
            name="start"
            placeholder="Start Date"
            value={values.start}
            onChange={handleInputChange}
            ref={startInputRef}
          />
          <Input
            variant="unstyled"
            name="end"
            placeholder="End Date"
            value={values.end}
            onChange={handleInputChange}
            ref={endInputRef}
          />
        </Flex>
      </PopoverTrigger>

      <PopoverContent
        p={0}
        w="min-content"
        border="none"
        outline="none"
        _focus={{ boxShadow: 'none' }}
        ref={calendarRef}
      >
        <Calendar
          value={dates}
          onSelectDate={handleSelectDate}
          months={numberOfMonthsToDisplay}
          highlightToday
          weekStartsOn={1}
          disableFutureDates
        >
          <PopoverBody p={0}>
            <CalendarControls>
              <CalendarPrevButton />
              <CalendarNextButton />
            </CalendarControls>

            <CalendarMonths>
              {[...Array(numberOfMonthsToDisplay).keys()].map((m) => (
                <CalendarMonth key={m} month={m}>
                  <CalendarMonthName />
                  <CalendarWeek />
                  <CalendarDays />
                </CalendarMonth>
              ))}
            </CalendarMonths>
          </PopoverBody>
        </Calendar>
      </PopoverContent>
    </Popover>
  );
};
