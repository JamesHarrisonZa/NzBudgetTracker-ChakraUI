import { useState, FC } from 'react';
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

interface DatePickerProps {
  initialDate: Date;
  onChange: (date: Date) => void;
}

export const DatePicker: FC<DatePickerProps> = ({ initialDate, onChange }) => {
  const [date, setDate] = useState<CalendarDate>(initialDate);

  const handleSelectDate = (date: CalendarDate | CalendarValues) => {
    setDate(date as CalendarDate);
    onChange(date as Date);
  };

  return (
    <Calendar
      value={{ start: date }}
      onSelectDate={handleSelectDate}
      singleDateSelection
      weekStartsOn={1}
    >
      <CalendarControls>
        <CalendarPrevButton />
        <CalendarNextButton />
      </CalendarControls>

      <CalendarMonths>
        <CalendarMonth>
          <CalendarMonthName />
          <CalendarWeek />
          <CalendarDays />
        </CalendarMonth>
      </CalendarMonths>
    </Calendar>
  );
};
