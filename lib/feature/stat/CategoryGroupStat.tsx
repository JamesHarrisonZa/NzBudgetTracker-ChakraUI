import { FC } from 'react';
import Link from 'next/link';
import { StatLabel, Stat, StatNumber, Button, Spinner } from '@chakra-ui/react';
import { TransactionCategoryGroupName } from '../../../pages/api';
import { useAccountTransactions } from '../../data-access/useAccountTransactions';
import {
  getTransactionsByCategoryGroup,
  getTransactionsTotal,
} from '../../util';

interface CategoryGroupStatProps {
  label: string;
  categoryGroupName: TransactionCategoryGroupName;
}

/**
 * Appearance, Education, Food, Health, Utilities, Transport, Lifestyle, Household, Professional Fees
 */

export const CategoryGroupStat: FC<CategoryGroupStatProps> = (
  props: CategoryGroupStatProps
) => {
  const { label, categoryGroupName } = props;

  const { transactions, isLoading, isError } = useAccountTransactions();

  const filteredTransactions = getTransactionsByCategoryGroup(
    transactions,
    categoryGroupName
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
      <Link href={`/category/${categoryGroupName}`} passHref>
        <Button colorScheme="blue" minWidth="110px">
          Details
        </Button>
      </Link>
    </Stat>
  );
};
