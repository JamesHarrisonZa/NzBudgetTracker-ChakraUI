import {
  Transactions,
  TransactionCategory,
  TransactionType,
} from '../../pages/api';

export const getTransactionsByCategory = (
  transactions: Transactions,
  category: TransactionCategory
) =>
  transactions.filter(
    (transaction) => transaction.categories?.name === category
  );

export const getTransactionsByCategories = (
  transactions: Transactions,
  categories: TransactionCategory[]
) =>
  transactions.filter((transaction) =>
    categories.includes(
      (transaction.categories?.name as TransactionCategory) ?? ''
    )
  );

export const getTransactionsByType = (
  transactions: Transactions,
  type: TransactionType
) => transactions.filter((transaction) => transaction.type === type);
