import type { NextApiRequest, NextApiResponse } from 'next';
import {
  AkahuClient,
  EnrichedTransaction,
  TransactionQueryParams,
  Transaction as AkahuTransaction,
} from 'akahu';
import { Transaction } from './types/Transaction';
import {
  TransactionCategoryGroupName,
  TransactionCategoryName,
} from './types/TransactionCategory';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Transaction[]>
) {
  const { startDate, endDate } = req.query;
  try {
    const transactions = await fetchAkahuTransactions(
      startDate as string,
      endDate as string
    );
    res.status(200).json(transactions);
  } catch (error) {
    if ((error as Error).message.startsWith('Unauthorized')) {
      res.status(401);
    }
    res.status(500);
  }
}

export const fetchAkahuTransactions = async (startDate: string, endDate: string) => {
  const appToken = process.env.AKAHU_APP_TOKEN as string;
  const userToken = process.env.AKAHU_USER_TOKEN as string;

  if (!appToken || !userToken) {
    throw Error('Unauthorized. Check ENV App and user tokens');
  }

  const akahu = new AkahuClient({ appToken });

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

  return mappedTransactions;
};

const getMappedTransactions = (
  transactions: EnrichedTransaction[]
): Transaction[] =>
  transactions.map((transaction) => {
    return {
      date: transaction.date,
      amount: transaction.amount,
      type: transaction.type,
      description: transaction.description,
      merchantName: transaction.merchant?.name ?? null,
      category: {
        name:
          (transaction.category?.name as TransactionCategoryName) ?? 'UNKNOWN',
        group:
          (transaction.category?.groups['personal_finance']
            ?.name as TransactionCategoryGroupName) ?? 'UNKNOWN',
      },
      logoUrl: transaction.meta?.logo ?? null,
    };
  });
