import axios from 'axios';
import { useAtom } from 'jotai';
import { useQuery, UseQueryOptions } from 'react-query';
import { Transactions } from '../../pages/api';
import { getFormattedDate } from '../util';
import { endDateAtom, startDateAtom } from './atoms/date-range';

export type AccountTransactionsHook = {
  transactions: Transactions;
  isLoading: boolean;
  error: unknown;
  isError: boolean;
  isSuccess: boolean;
  isIdle: boolean;
  status: 'error' | 'idle' | 'loading' | 'success';
  isFetched: boolean;
};

const fetchAccountTransactions = async (startDate: Date, endDate: Date) => {
  const formattedStartDate = getFormattedDate(startDate);
  const formattedEndDate = getFormattedDate(endDate);

  const url = `/api/akahu?startDate=${formattedStartDate}&endDate=${formattedEndDate}`;
  const transactions = await axios.get<Transactions>(url);
  return transactions.data;
};

export const useAccountTransactions = (): AccountTransactionsHook => {
  const thirtyMinutes = 30 * 60 * 1000;
  const options: UseQueryOptions<Transactions> = {
    staleTime: thirtyMinutes,
  };

  const [startDate] = useAtom(startDateAtom);
  const [endDate] = useAtom(endDateAtom);

  const {
    isLoading,
    isError,
    isSuccess,
    isIdle,
    error,
    data,
    status,
    isFetched,
  } = useQuery<Transactions>(
    ['transactions', startDate, endDate],
    ({ queryKey }) =>
      fetchAccountTransactions(queryKey[1] as Date, queryKey[2] as Date),
    options
  );

  return {
    transactions: data ?? [],
    isLoading,
    error,
    isError,
    isSuccess,
    isIdle,
    status,
    isFetched,
  };
};
