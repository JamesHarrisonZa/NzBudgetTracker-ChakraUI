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
  TransactionCategoryName.Lifestyle_Cinemas,
  TransactionCategoryName.Lifestyle_Entertainment,
  TransactionCategoryName.Lifestyle_EventsAndTickets,
  TransactionCategoryName.Lifestyle_DigitalGamingProductsAndServices,
  TransactionCategoryName.Lifestyle_HobbyToyAndPhysicalGameStores,
  TransactionCategoryName.Lifestyle_MediaAndEntertainmentStreamingServices,
];

export const EntertainmentStat: FC = () => {
  const label = 'Entertainment';

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
      <Link href={`/detail/entertainment`} passHref>
        <Button colorScheme="blue" minWidth="110px">
          Details
        </Button>
      </Link>
    </Stat>
  );
};
