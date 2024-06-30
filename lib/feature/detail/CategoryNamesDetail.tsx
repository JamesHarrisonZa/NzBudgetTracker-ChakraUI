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
import { TransactionCategoryName } from '../../../pages/api';
import { DetailTableRows } from '../../ui/detail/DetailTableRows';
import { DetailTableHeading } from '../../ui/detail/DetailTableHeading';
import {
  getTransactionsByCategoryGroup,
  getTransactionsByCategoryNames,
  getTransactionsTotal,
} from '../../util';
import { useAccountTransactions } from '../../data-access/useAccountTransactions';

interface CategoryDetailProps {
  heading: string;
  categoryNames: TransactionCategoryName[];
}

/**
 * Food, Health, Utilities, Transport, Lifestyle, Household, Professional Fees
 */

export const CategoryNamesDetail: FC<CategoryDetailProps> = ({
  heading,
  categoryNames,
}) => {
  const { transactions, isLoading, isError } = useAccountTransactions();

  const filteredTransactions = getTransactionsByCategoryNames(
    transactions,
    categoryNames
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
