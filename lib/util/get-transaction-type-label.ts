import { TransactionType } from '../../pages/api';

const typeLabelMap = {
  [`${TransactionType.Payment}`]: 'Payments',
  [`${TransactionType.StandingOrder}`]: 'Debit Orders',
  [`${TransactionType.Debit}`]: 'Debit',
  [`${TransactionType.Credit}`]: 'Income',
  [`${TransactionType.EFTPOS}`]: 'EFT POS',
};

export const getTransactionTypeLabel = (type: TransactionType) =>
  typeLabelMap[type];
