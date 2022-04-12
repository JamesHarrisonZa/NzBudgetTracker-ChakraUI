import axios from 'axios';
import { useAtom } from 'jotai';
import { useQuery, UseQueryOptions } from 'react-query';
import { AccountTransactions } from './accountTransaction';
import { endDateAtom, startDateAtom } from './atoms/date-range';

export type AccountTransactionsHook = {
  transactions: AccountTransactions;
  isLoading: boolean;
  error: unknown;
  isError: boolean;
  isSuccess: boolean;
  isIdle: boolean;
  status: 'error' | 'idle' | 'loading' | 'success';
  isFetched: boolean;
};

const fetchAccountTransactions = async (startDate: Date, endDate: Date) => {
  const transactions = await axios.get<AccountTransactions>('/api/akahu');
  return transactions.data;
};

export const useAccountTransactions = (): AccountTransactionsHook => {
  const options: UseQueryOptions<AccountTransactions> = {
    staleTime: 5 * 60 * 1000, //5 mins
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
  } = useQuery<AccountTransactions>(
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
