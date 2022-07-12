import { FC } from 'react';
import Link from 'next/link';
import { StatLabel, Stat, StatNumber, Button, Spinner } from '@chakra-ui/react';
import { TransactionCategory } from '../../../pages/api';
import { useAccountTransactions } from '../../data-access/useAccountTransactions';
import { getTransactionsByCategory, getTransactionsTotal } from '../../util';

interface OwnProps {
  label: string;
  category: TransactionCategory;
}

export const CategoryStat: FC<OwnProps> = (props: OwnProps) => {
  const { label, category } = props;

  const { transactions, isLoading, isError } = useAccountTransactions();

  const filteredTransactions = getTransactionsByCategory(
    transactions,
    category
  );
  const total = getTransactionsTotal(filteredTransactions);

  return (
    <Stat>
      <StatLabel>{label}</StatLabel>
      {isLoading ? (
        <>
          <Spinner color="teal" />
          <br />
        </>
      ) : (
        <StatNumber>${total}</StatNumber>
      )}
      <Link href={`/category/${category}`} passHref>
        <Button colorScheme="blue" minWidth="110px">
          Details
        </Button>
      </Link>
    </Stat>
  );
};
