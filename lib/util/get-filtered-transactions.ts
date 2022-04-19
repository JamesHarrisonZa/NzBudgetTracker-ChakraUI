import { Transactions } from '../../pages/api/types/Transaction';
import { TransactionCategory } from '../../pages/api/types/TransactionCategory';
import { TransactionType } from '../../pages/api/types/TransactionTypes';

export const getFilteredTransactions = (
  transactions: Transactions,
  category: TransactionCategory
) =>
  transactions.filter((transaction) =>
    transaction.categories?.map((c) => c.name).includes(category)
  );
