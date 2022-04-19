import { FC } from 'react';
import { StatLabel, Stat, StatNumber, Button, Spinner } from '@chakra-ui/react';
import { TransactionType } from '../../pages/api/types/TransactionType';
import { useAccountTransactions } from '../data-access/useAccountTransactions';
import { getTransactionsByType } from '../util/get-filtered-transactions';
import { getTransactionsTotal } from '../util/get-transactions-total';
import Link from 'next/link';

interface OwnProps {
  label: string;
  type: TransactionType;
}

export const TypeStat: FC<OwnProps> = (props: OwnProps) => {
  const { label, type: type } = props;

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
        <Button colorScheme="blue">Details</Button>
      </Link>
    </Stat>
  );
};
