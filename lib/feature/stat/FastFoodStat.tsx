import { FC } from 'react';
import Link from 'next/link';
import { StatLabel, Stat, StatNumber, Button, Spinner } from '@chakra-ui/react';
import { TransactionCategory } from '../../../pages/api/types/TransactionCategory';
import { useAccountTransactions } from '../../data-access/useAccountTransactions';
import { getTransactionsByCategories } from '../../util/get-filtered-transactions';
import { getTransactionsTotal } from '../../util/get-transactions-total';

interface OwnProps {}

export const FastFoodStat: FC<OwnProps> = (props: OwnProps) => {
  const label = 'Fast food';
  const categories = [
    TransactionCategory.FastFoodRestaurants,
    TransactionCategory.CafesAndRestaurants,
    TransactionCategory.IceCreamGelatoCandyNutAndConfectioneryStores,
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
      <Link href={`/detail/fast-food`} passHref>
        <Button colorScheme="blue">Details</Button>
      </Link>
    </Stat>
  );
};
