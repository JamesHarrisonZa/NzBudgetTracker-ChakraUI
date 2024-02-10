export type Transactions = Transaction[];

export interface Transaction {
  date: string;
  amount: number;
  type: string;
  description: string;
  merchantName: string | null;
  categories: Category | null;
  logoUrl: string | null;
}

export interface Category {
  name: string;
  type: CategoryType;
}

export enum CategoryType {
  Broad = 'nzfcc:pfm', // A broad level of categorisation
  Group = 'nzfcc:group', // A slightly less granular level of categorisation
  Base = 'nzfcc:base', // The most granular level of categorisation
}
