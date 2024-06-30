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
  TransactionCategoryName.Food_Bakeries,
  TransactionCategoryName.Food_FishAndSeafoodSupplies,
  TransactionCategoryName.Food_MeatSupplies,
  TransactionCategoryName.Food_SpecialtyFoodStores,
  TransactionCategoryName.Food_SupermarketsAndGroceryStores,
];

export const GroceriesStat: FC = () => {
  const label = 'Groceries';

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
      <Link href={`/detail/groceries`} passHref>
        <Button colorScheme="blue" minWidth="110px">
          Details
        </Button>
      </Link>
    </Stat>
  );
};
