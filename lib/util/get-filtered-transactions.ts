import { AccountTransactions } from '../data-access/accountTransaction';
import { TransactionCategory } from './transaction-categories';

export const getFilteredTransactions = (
  transactions: AccountTransactions,
  category: TransactionCategory
) =>
  transactions.filter((transaction) =>
    transaction.categories?.map((c) => c.name).includes(category)
  );
