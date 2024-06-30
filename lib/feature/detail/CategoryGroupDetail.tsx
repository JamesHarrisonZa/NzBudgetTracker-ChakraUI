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
import { DetailTableRows } from '../../ui/detail/DetailTableRows';
import { DetailTableHeading } from '../../ui/detail/DetailTableHeading';
import {
  getTransactionsByCategoryGroup,
  getTransactionsTotal,
} from '../../util';
import { useAccountTransactions } from '../../data-access/useAccountTransactions';

interface CategoryDetailProps {
  categoryGroupName: TransactionCategoryGroupName;
}

/**
 * Food, Health, Utilities, Transport, Lifestyle, Household, Professional Fees
 */

export const CategoryGroupDetail: FC<CategoryDetailProps> = ({
  categoryGroupName: category,
}) => {
  const { transactions, isLoading, isError } = useAccountTransactions();

  const filteredTransactions = getTransactionsByCategoryGroup(
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
