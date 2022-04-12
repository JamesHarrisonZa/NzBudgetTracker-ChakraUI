import type { NextApiRequest, NextApiResponse } from 'next';
import {
  AkahuClient,
  EnrichedTransaction,
  TransactionQueryParams,
} from 'akahu';

export interface AkahuTransaction {
  date: string;
  amount: number;
  type: string;
  description: string;
  merchantName: string;
  categories: Category[];
  logoUrl?: string;
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AkahuTransaction[]>
) {
  const appToken = process.env.AKAHU_APP_TOKEN as string;
  const userToken = process.env.AKAHU_USER_TOKEN as string;
  const accountId = process.env.AKAHU_ACCOUNT_ID as string;

  if (!appToken || !userToken) {
    res.status(401);
  }

  const akahu = new AkahuClient({ appToken });

  const startDate = '2022-03-01'; //TODO make parameters
  const endDate = '2022-03-31'; //TODO make parameters

  const queryParameters: TransactionQueryParams = {
    start: startDate,
    end: endDate,
  };
  const transactions = await akahu.accounts.listTransactions(
    userToken,
    accountId,
    queryParameters
  );

  //TODO handle pagination
  const akahuTransactions = transactions.items as EnrichedTransaction[];
  const mappedTransactions = getMappedTransactions(akahuTransactions);

  res.status(200).json(mappedTransactions);
}

const getMappedTransactions = (
  transactions: EnrichedTransaction[]
): AkahuTransaction[] =>
  transactions.map((transaction) => {
    return {
      date: transaction.date,
      amount: transaction.amount,
      type: transaction.type,
      description: transaction.description,
      merchantName: transaction.merchant?.name,
      categories: transaction.category?.components.map((c) => ({
        name: c.name,
        type: c.type as CategoryType,
      })),
      logoUrl: transaction.meta.logo,
    };
  });
