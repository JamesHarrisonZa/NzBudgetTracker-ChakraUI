import {
  TransactionCategoryGroupName,
  TransactionCategoryName,
} from './TransactionCategory';

export type Transactions = Transaction[];

export interface Transaction {
  date: string;
  amount: number;
  type: string;
  description: string;
  merchantName: string | null;
  category: Category | null;
  logoUrl: string | null;
}

export interface Category {
  name: TransactionCategoryName;
  group: TransactionCategoryGroupName;
}
