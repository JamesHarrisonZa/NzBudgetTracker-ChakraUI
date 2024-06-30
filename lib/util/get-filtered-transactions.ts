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
    (transaction) =>
      normalize(transaction.category?.group ?? '') === normalize(categoryGroup)
  );

export const getTransactionsByCategoryGroups = (
  transactions: Transactions,
  categoryGroups: TransactionCategoryGroupName[]
) =>
  transactions.filter((transaction) => {
    const normalizedCategoryGroups = categoryGroups.map(normalize);

    return normalizedCategoryGroups.includes(
      normalize(transaction.category?.group ?? '')
    );
  });

export const getTransactionsByCategoryNames = (
  transactions: Transactions,
  categoryNames: TransactionCategoryName[]
) =>
  transactions.filter((transaction) => {
    const normalizedCategoryNames = categoryNames.map(normalize);

    return normalizedCategoryNames.includes(
      normalize(transaction.category?.name ?? '')
    );
  });

export const getTransactionsByType = (
  transactions: Transactions,
  type: TransactionType
) => transactions.filter((transaction) => normalize(transaction.type) === normalize(type));

const normalize = (str: string) => str.replace(/ /g, '').toLowerCase(); //Remove spaces and convert to lowercase
