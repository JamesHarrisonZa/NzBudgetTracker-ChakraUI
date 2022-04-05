import { Transaction } from '../../pages/api/akahu';
import { TransactionCategories } from './transaction-categories';

export const getGroceryTransactions = (transactions: Transaction[]) =>
  transactions.filter((transaction) =>
    transaction.categories
      ?.map((c) => c.name)
      .includes(TransactionCategories.GroceryStoresAndSupermarkets)
  );

export const getUtilityTransactions = (transactions: Transaction[]) =>
  transactions.filter((transaction) =>
    transaction.categories
      ?.map((c) => c.name)
      .includes(TransactionCategories.Utilities)
  );

export const getFastFoodTransactions = (transactions: Transaction[]) =>
  transactions.filter((transaction) =>
    transaction.categories
      ?.map((c) => c.name)
      .includes(TransactionCategories.FastFoodRestaurants)
  );
