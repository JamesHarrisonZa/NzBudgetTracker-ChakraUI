import axios from 'axios';
import { useAtom } from 'jotai';
import { QueryClient, useQuery, UseQueryOptions } from 'react-query';
import { Transactions } from '../../pages/api';
import { fetchAkahuTransactions } from '../../pages/api/akahu';
import { getCurrentDateThisMonth, getFirstOfDateThisMonth, getFormattedDate } from '../util';
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

export const prefetchAccountTransactions = async(queryClient: QueryClient) => {
  const startDate = getFormattedDate(getFirstOfDateThisMonth());
  const endDate = getFormattedDate(getCurrentDateThisMonth());
  const fetchData = async() => await fetchAccountTransactions(startDate, endDate);

  await queryClient.prefetchQuery(['transactions', startDate, endDate], fetchData);
};

const fetchAccountTransactions = async (startDate: string, endDate: string) => {
  return await fetchAkahuTransactions(startDate, endDate);
};

export const useAccountTransactions = (): AccountTransactionsHook => {
  const thirtyMinutes = 30 * 60 * 1000;
  const options: UseQueryOptions<Transactions> = {
    staleTime: thirtyMinutes,
  };

  const [startDate] = useAtom(startDateAtom);
  const [endDate] = useAtom(endDateAtom);
  const formattedStartDate = getFormattedDate(startDate);
  const formattedEndDate = getFormattedDate(endDate);

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
    ['transactions', formattedStartDate, formattedEndDate],
    ({ queryKey }) =>
      fetchAccountTransactions(queryKey[1] as string, queryKey[2] as string),
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
