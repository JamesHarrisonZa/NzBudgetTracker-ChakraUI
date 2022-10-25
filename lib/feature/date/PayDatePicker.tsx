import { FC } from 'react';
import { useAtom } from 'jotai';
import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
} from '@chakra-ui/react';
import { DatePicker } from '../../ui/DatePicker';
import { getThisMonthsPayDay } from '../../util';
import { payDayAtom } from '../../data-access/atoms/pay-day';

export const PayDatePicker: FC = () => {
  const [payDay, setPayDay] = useAtom(payDayAtom);
  const thisMonthsPayDay = getThisMonthsPayDay(payDay);

  const handleOnChange = (date: Date) => {
    const dayOfTheMonth = date.getDate();
    setPayDay(dayOfTheMonth);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button colorScheme="green">{`Payday: ${payDay}`}</Button>
      </PopoverTrigger>
      <PopoverContent>
        <DatePicker initialDate={thisMonthsPayDay} onChange={handleOnChange} />
      </PopoverContent>
    </Popover>
  );
};
