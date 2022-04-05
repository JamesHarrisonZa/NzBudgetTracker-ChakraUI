import { AccountTransactions } from '../data-access/accountTransaction';

export const getTransactionsTotal = (transactions: AccountTransactions) => {
  const total = transactions.reduce((prev, curr) => prev + curr.amount, 0);
  return total.toFixed(2);
};
