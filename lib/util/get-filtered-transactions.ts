import { Transaction } from '../../pages/api/akahu';
import { TransactionCategories } from './transaction-categories';

export const getFilteredTransactions = (
  transactions: Transaction[],
  category: TransactionCategories
) =>
  transactions.filter((transaction) =>
    transaction.categories?.map((c) => c.name).includes(category)
  );
