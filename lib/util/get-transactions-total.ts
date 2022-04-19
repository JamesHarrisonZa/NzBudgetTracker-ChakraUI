import { Transactions } from '../../pages/api/types/Transaction';

export const getTransactionsTotal = (transactions: Transactions) => {
  const total = transactions.reduce((prev, curr) => prev + curr.amount, 0);
  return total.toFixed(2);
};
