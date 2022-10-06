import { FC } from 'react';
import Link from 'next/link';
import { StatLabel, Stat, StatNumber, Button, Spinner } from '@chakra-ui/react';
import { TransactionCategory } from '../../../pages/api';
import { useAccountTransactions } from '../../data-access/useAccountTransactions';
import { getTransactionsByCategories, getTransactionsTotal } from '../../util';

export const EntertainmentStat: FC = () => {
  const label = 'Entertainment';
  const categories = [
    TransactionCategory.CableServices,
    TransactionCategory.EntertainmentNEC,
    TransactionCategory.RadioAndTelevisionServices,
  ];

  const { transactions, isLoading, isError } = useAccountTransactions();

  const filteredTransactions = getTransactionsByCategories(
    transactions,
    categories
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
      <Link href={`/detail/entertainment`} passHref>
        <Button colorScheme="blue" minWidth="110px">
          Details
        </Button>
      </Link>
    </Stat>
  );
};
