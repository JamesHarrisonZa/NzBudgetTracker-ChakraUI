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
import { endDateAtom, startDateAtom } from '../data-access/atoms/date-range';

export const DatePopover: FC = () => {
  const [startDate, setStartDate] = useAtom(startDateAtom);
  const [endDate, setEndDate] = useAtom(endDateAtom);

  const formattedStartDate = format(startDate, 'do LLLL yyyy');
  const formattedEndDate = format(endDate, 'do LLLL yyyy');

  return (
    <Popover>
      <PopoverTrigger>
        <Button>
          {formattedStartDate} ➡ {formattedEndDate}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <DateRangePicker />
      </PopoverContent>
    </Popover>
  );
};
