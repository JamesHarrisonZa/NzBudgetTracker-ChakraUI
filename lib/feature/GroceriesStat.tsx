import { FC } from 'react';
import { StatLabel, Stat, StatNumber, Button, Spinner } from '@chakra-ui/react';
import { TransactionCategory } from '../../pages/api/types/TransactionCategory';
import { useAccountTransactions } from '../data-access/useAccountTransactions';
import { getTransactionsByCategories } from '../util/get-filtered-transactions';
import { getTransactionsTotal } from '../util/get-transactions-total';
import Link from 'next/link';

interface OwnProps {}

export const GroceriesStat: FC<OwnProps> = (props: OwnProps) => {
  const label = 'Groceries';
  const categories = [
    TransactionCategory.GroceryStoresAndSupermarkets,
    TransactionCategory.SupermarketAndGroceryStores,
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
      <Link href={`/groceries/detail`} passHref>
        <Button colorScheme="blue">Details</Button>
      </Link>
    </Stat>
  );
};
