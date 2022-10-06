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
import { DatePopover } from '../date/DatePopover';
import { TransactionCategory } from '../../../pages/api';
import { DetailTableRows } from '../../ui/detail/DetailTableRows';
import { DetailTableHeading } from '../../ui/detail/DetailTableHeading';
import { getTransactionsByCategory, getTransactionsTotal } from '../../util';
import { useAccountTransactions } from '../../data-access/useAccountTransactions';

interface CategoryDetailProps {
  category: TransactionCategory;
}

/**
 * Food, Health, Utilities, Transport, Lifestyle, Household, Professional Fees
 */

export const CategoryDetail: FC<CategoryDetailProps> = ({ category }) => {
  const { transactions, isLoading, isError } = useAccountTransactions();

  const filteredTransactions = getTransactionsByCategory(
    transactions,
    category
  );

  const total = getTransactionsTotal(filteredTransactions);

  return (
    <Flex direction="column" flexGrow={1}>
      <Center>
        <Heading>{category}</Heading>
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
        <DatePopover />
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
