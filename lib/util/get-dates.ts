import { format, subDays } from 'date-fns';

export const getFormattedDate = (date: Date) => format(date, 'yyyy-MM-dd');

export const getCurrentDateThisMonth = (): Date => new Date();

export const getFirstOfDateThisMonth = (): Date => {
  return new Date(
    getCurrentDateThisMonth().getFullYear(),
    getCurrentDateThisMonth().getMonth(),
    1
  );
};

export const getFirstOfDateLastMonth = (): Date => {
  return new Date(
    getCurrentDateThisMonth().getFullYear(),
    getCurrentDateThisMonth().getMonth() - 1,
    1
  );
};

export const getLastOfDateLastMonth = (): Date =>
  subDays(getFirstOfDateThisMonth(), 1);

export const getThisMonthsPayDay = (payDay: number): Date => {
  return new Date(
    getCurrentDateThisMonth().getFullYear(),
    getCurrentDateThisMonth().getMonth(),
    payDay
  );
};
