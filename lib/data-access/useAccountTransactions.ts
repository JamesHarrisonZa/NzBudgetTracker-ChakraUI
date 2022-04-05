import axios from 'axios';
import { useQuery } from 'react-query';
import { AccountTransactions } from './accountTransaction';

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

const fetchAccountTransactions = async () => {
  const transactions = await axios.get<AccountTransactions>('/api/akahu');
  return transactions.data;
};

export const useAccountTransactions = (): AccountTransactionsHook => {
  const {
    isLoading,
    isError,
    isSuccess,
    isIdle,
    error,
    data,
    status,
    isFetched,
  } = useQuery<AccountTransactions>('transactions', fetchAccountTransactions);

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
