import type { NextApiRequest, NextApiResponse } from 'next';
import {
  AkahuClient,
  EnrichedTransaction,
  TransactionQueryParams,
  Transaction as AkahuTransaction,
} from 'akahu';
import { Transaction, CategoryType } from './types/Transaction';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Transaction[]>
) {
  const appToken = process.env.AKAHU_APP_TOKEN as string;
  const userToken = process.env.AKAHU_USER_TOKEN as string;

  if (!appToken || !userToken) {
    res.status(401);
  }

  const akahu = new AkahuClient({ appToken });

  const { startDate, endDate } = req.query;
  const query: TransactionQueryParams = {
    start: startDate as string,
    end: endDate as string,
  };

  const transactions: AkahuTransaction[] = [];

  do {
    const page = await akahu.transactions.list(userToken, query);

    transactions.push(...page.items);
    query.cursor = page.cursor.next;
  } while (query.cursor !== null);

  const akahuTransactions = transactions as EnrichedTransaction[];
  const mappedTransactions = getMappedTransactions(akahuTransactions);

  res.status(200).json(mappedTransactions);
}

const getMappedTransactions = (
  transactions: EnrichedTransaction[]
): Transaction[] =>
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
