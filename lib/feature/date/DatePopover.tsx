import { FC } from 'react';
import { useAtom } from 'jotai';
import { format } from 'date-fns';
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import { DateRangePicker } from './DateRangePicker';
import { endDateAtom, startDateAtom } from '../../data-access/atoms/date-range';

export const DatePopover: FC = () => {
  const [startDate] = useAtom(startDateAtom);
  const [endDate] = useAtom(endDateAtom);

  const formattedStartDate = format(startDate, 'do LLLL yyyy');
  const formattedEndDate = format(endDate, 'do LLLL yyyy');

  const buttonText = `${formattedStartDate} ➡ ${formattedEndDate}`;

  return (
    <Popover>
      <PopoverTrigger>
        <Button colorScheme="green">{buttonText}</Button>
      </PopoverTrigger>
      <PopoverContent>
        <DateRangePicker />
      </PopoverContent>
    </Popover>
  );
};
