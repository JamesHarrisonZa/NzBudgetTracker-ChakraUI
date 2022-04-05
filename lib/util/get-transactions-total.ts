import { AccountTransactions } from '../data-access/accountTransaction';

export const getTransactionsTotal = (transactions: AccountTransactions) =>
  transactions.reduce((prev, curr) => prev + curr.amount, 0);
