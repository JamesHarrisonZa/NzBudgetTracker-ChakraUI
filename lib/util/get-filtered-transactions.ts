import {
  Transactions,
  TransactionCategoryGroupName,
  TransactionType,
  TransactionCategoryName,
} from '../../pages/api';

export const getTransactionsByCategoryGroup = (
  transactions: Transactions,
  categoryGroup: TransactionCategoryGroupName
) =>
  transactions.filter(
    (transaction) => transaction.category?.group === categoryGroup
  );

export const getTransactionsByCategoryGroups = (
  transactions: Transactions,
  categoryGroups: TransactionCategoryGroupName[]
) =>
  transactions.filter((transaction) =>
    categoryGroups.includes(
      (transaction.category?.group as TransactionCategoryGroupName) ?? ''
    )
  );

export const getTransactionsByCategoryNames = (
  transactions: Transactions,
  categoryGroups: TransactionCategoryName[]
) =>
  transactions.filter((transaction) =>
    categoryGroups.includes(
      (transaction.category?.name as TransactionCategoryName) ?? ''
    )
  );

export const getTransactionsByType = (
  transactions: Transactions,
  type: TransactionType
) => transactions.filter((transaction) => transaction.type === type);
