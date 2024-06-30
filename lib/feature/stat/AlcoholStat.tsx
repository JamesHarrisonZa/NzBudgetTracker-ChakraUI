import { FC } from 'react';
import Link from 'next/link';
import { StatLabel, Stat, StatNumber, Button, Spinner } from '@chakra-ui/react';
import { TransactionCategoryName } from '../../../pages/api';
import { useAccountTransactions } from '../../data-access/useAccountTransactions';
import {
  getTransactionsByCategoryNames,
  getTransactionsTotal,
} from '../../util';

export const categoryNames = [
  TransactionCategoryName.Lifestyle_LiquorStores,
  TransactionCategoryName.Lifestyle_BarsPubsNightclubs,
];

export const AlcoholStat: FC = () => {
  const label = 'Alcohol';

  const { transactions, isLoading, isError } = useAccountTransactions();

  const filteredTransactions = getTransactionsByCategoryNames(
    transactions,
    categoryNames
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
      <Link href={`/detail/alcohol`} passHref>
        <Button colorScheme="blue" minWidth="110px">
          Details
        </Button>
      </Link>
    </Stat>
  );
};
