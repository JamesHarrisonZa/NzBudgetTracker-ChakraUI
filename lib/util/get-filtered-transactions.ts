import { Transactions } from '../../pages/api/types/Transaction';
import { TransactionCategory } from '../../pages/api/types/TransactionCategory';
import { TransactionType } from '../../pages/api/types/TransactionType';

export const getTransactionsByCategory = (
  transactions: Transactions,
  category: TransactionCategory
) =>
  transactions.filter((transaction) =>
    transaction.categories?.map((category) => category.name).includes(category)
  );

export const getTransactionsByType = (
  transactions: Transactions,
  type: TransactionType
) => transactions.filter((transaction) => transaction.type === type);
