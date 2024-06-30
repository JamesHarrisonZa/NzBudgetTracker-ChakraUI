import { TransactionType } from '../../pages/api';

const typeLabelMap = {
  [`${TransactionType.Payment}`]: 'Payments',
  [`${TransactionType.StandingOrder}`]: 'Debit Orders',
  [`${TransactionType.Debit}`]: 'Debit',
  [`${TransactionType.Credit}`]: 'Income / Credit',
  [`${TransactionType.Transfer}`]: 'Transfer',
  [`${TransactionType.Fee}`]: 'Fee',
};

export const getTransactionTypeLabel = (type: TransactionType) =>
  typeLabelMap[type];
