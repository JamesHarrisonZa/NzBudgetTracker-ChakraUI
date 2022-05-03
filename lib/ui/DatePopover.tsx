import { FC } from 'react';
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import { DateRangePicker } from '../feature/DateRangePicker';

export const DatePopover: FC = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Select Dates</Button>
      </PopoverTrigger>
      <PopoverContent>
        <DateRangePicker />
      </PopoverContent>
    </Popover>
  );
};
