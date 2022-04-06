import { FC } from 'react';
import { StatLabel, Stat, StatNumber } from '@chakra-ui/react';
import { useAccountTransactions } from '../data-access/useAccountTransactions';
import { TransactionCategory } from '../util/transaction-categories';
import { getFilteredTransactions } from '../util/get-filtered-transactions';
import { getTransactionsTotal } from '../util/get-transactions-total';

interface OwnProps {
  label: string;
  category: TransactionCategory;
}

export const CategoryStat: FC<OwnProps> = (props: OwnProps) => {
  const { label, category } = props;

  const { transactions, isLoading, isError } = useAccountTransactions();

  const filteredTransactions = getFilteredTransactions(transactions, category);
  const total = getTransactionsTotal(filteredTransactions);

  return (
    <Stat>
      <StatLabel>{label}</StatLabel>
      <StatNumber>${total}</StatNumber>
    </Stat>
  );
};
