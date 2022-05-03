import { FC } from 'react';
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Heading,
  Flex,
  Center,
  Image,
  Spinner,
} from '@chakra-ui/react';
import { DatePopover } from '../DatePopover';
import FormattedDate from '../../ui/FormattedDate';
import { Transactions } from '../../../pages/api/types/Transaction';
import { TransactionType } from '../../../pages/api/types/TransactionType';
import { useAccountTransactions } from '../../data-access/useAccountTransactions';
import { getTransactionsByType } from '../../util/get-filtered-transactions';
import { getTransactionsTotal } from '../../util/get-transactions-total';

interface OwnProps {
  type: TransactionType;
}

const getTableHeading = () => (
  <Thead>
    <Tr>
      <Th /> {/* Logo */}
      <Th>Description</Th>
      <Th>Amount</Th>
      <Th>Date</Th>
    </Tr>
  </Thead>
);

const getTableRows = (filteredTransactions: Transactions) =>
  filteredTransactions.map((transaction, i) => (
    <Tr key={i}>
      <Td py="0">
        <Image src={transaction.logoUrl} boxSize="50px" alt="" />
      </Td>
      <Td>{transaction.description}</Td>
      <Td isNumeric>{transaction.amount.toFixed(2)}</Td>
      <Td>
        <FormattedDate date={new Date(transaction.date)} />
      </Td>
    </Tr>
  ));

export const TypeDetail: FC<OwnProps> = (props: OwnProps) => {
  const { type } = props;

  const { transactions, isLoading, isError } = useAccountTransactions();

  const filteredTransactions = getTransactionsByType(transactions, type);
  const total = getTransactionsTotal(filteredTransactions);

  const tableHeading = getTableHeading();
  const tableRows = getTableRows(filteredTransactions);

  return (
    <Flex direction="column" flexGrow={1}>
      <Center>
        <Heading>{type}</Heading>
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
          {tableHeading}
          <Tbody>{tableRows}</Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};
