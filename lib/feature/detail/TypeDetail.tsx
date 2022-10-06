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
import { TransactionType } from '../../../pages/api';
import { useAccountTransactions } from '../../data-access/useAccountTransactions';
import {
  getTransactionTypeLabel,
  getTransactionsByType,
  getTransactionsTotal,
} from '../../util';
import { DetailTableRows } from '../../ui/detail/DetailTableRows';
import { DetailTableHeading } from '../../ui/detail/DetailTableHeading';

interface OwnProps {
  type: TransactionType;
}

/**
 * Income, Debit Orders and Payments
 */

export const TypeDetail: FC<OwnProps> = (props: OwnProps) => {
  const { type } = props;
  const heading = getTransactionTypeLabel(type);

  const { transactions, isLoading, isError } = useAccountTransactions();

  const filteredTransactions = getTransactionsByType(transactions, type);
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
          <DetailTableHeading variant="description" />
          <Tbody>
            <DetailTableRows
              transactions={filteredTransactions}
              variant="description"
            />
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};
