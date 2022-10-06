import { FC } from 'react';
import Link from 'next/link';
import { StatLabel, Stat, StatNumber, Button, Spinner } from '@chakra-ui/react';
import { TransactionType } from '../../../pages/api';
import { useAccountTransactions } from '../../data-access/useAccountTransactions';
import { getTransactionsByType, getTransactionsTotal } from '../../util';

interface TypeStatProps {
  label: string;
  type: TransactionType;
}

export const TypeStat: FC<TypeStatProps> = ({ label, type }) => {
  const { transactions, isLoading, isError } = useAccountTransactions();

  const filteredTransactions = getTransactionsByType(transactions, type);
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
      <Link href={`/type/${type}`} passHref>
        <Button colorScheme="blue" minWidth="110px">
          Details
        </Button>
      </Link>
    </Stat>
  );
};
