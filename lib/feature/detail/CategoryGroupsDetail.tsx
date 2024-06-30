import { FC } from 'react';
import {
  TableContainer,
  Table,
  Tbody,
  Heading,
  Flex,
  Center,
  Spinner,
} from '@chakra-ui/react';
import { DateRangePopover } from '../date/DateRangePopover';
import { TransactionCategoryGroupName } from '../../../pages/api';
import { useAccountTransactions } from '../../data-access/useAccountTransactions';
import {
  getTransactionsByCategoryGroups,
  getTransactionsTotal,
} from '../../util';
import { DetailTableHeading } from '../../ui/detail/DetailTableHeading';
import { DetailTableRows } from '../../ui/detail/DetailTableRows';

interface CategoriesDetailProps {
  heading: string;
  categoryGroups: TransactionCategoryGroupName[];
}

/**
 * Grouped. Made up of multiple categories
 * Utilities, Entertainment, Groceries, Alcohol, Fast food
 */

export const CategoryGroupsDetail: FC<CategoriesDetailProps> = ({
  heading,
  categoryGroups,
}) => {
  const { transactions, isLoading, isError } = useAccountTransactions();

  const filteredTransactions = getTransactionsByCategoryGroups(
    transactions,
    categoryGroups
  );

  const total = getTransactionsTotal(filteredTransactions);

  return (
    <Flex direction="column" flexGrow={1}>
      <Center>
        <Heading>{heading}</Heading>
      </Center>
      <Center>
        {isLoading ? (
          <>
            <Spinner color="teal" size="xl" />
            <br />
          </>
        ) : (
          <Heading>${total}</Heading>
        )}
      </Center>
      <Center margin="5">
        <DateRangePopover />
      </Center>
      <TableContainer>
        <Table variant="striped" colorScheme="blue">
          <DetailTableHeading />
          <Tbody>
            <DetailTableRows transactions={filteredTransactions} />
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};
