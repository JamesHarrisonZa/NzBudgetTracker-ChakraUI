import type { NextApiRequest, NextApiResponse } from 'next';
import {
  AkahuClient,
  Paginated,
  Transaction,
  TransactionQueryParams,
} from 'akahu';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Paginated<Transaction>>
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

  res.status(200).json(transactions);
}
