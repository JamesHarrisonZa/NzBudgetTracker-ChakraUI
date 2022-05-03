import {
  Transactions,
  TransactionCategory,
  TransactionType,
} from '../../pages/api';

export const getTransactionsByCategory = (
  transactions: Transactions,
  category: TransactionCategory
) =>
  transactions.filter((transaction) =>
    transaction.categories?.map((category) => category.name).includes(category)
  );

export const getTransactionsByCategories = (
  transactions: Transactions,
  categories: TransactionCategory[]
) =>
  transactions.filter((transaction) =>
    transaction.categories
      ?.map((category) => category.name as TransactionCategory)
      .some((transactionCategory) => categories.includes(transactionCategory))
  );

export const getTransactionsByType = (
  transactions: Transactions,
  type: TransactionType
) => transactions.filter((transaction) => transaction.type === type);
