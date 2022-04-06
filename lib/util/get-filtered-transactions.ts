import { Transaction } from '../../pages/api/akahu';
import { TransactionCategory } from './transaction-categories';

export const getFilteredTransactions = (
  transactions: Transaction[],
  category: TransactionCategory
) =>
  transactions.filter((transaction) =>
    transaction.categories?.map((c) => c.name).includes(category)
  );
