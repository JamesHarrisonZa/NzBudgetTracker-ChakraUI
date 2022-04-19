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
  Skeleton,
  Spinner,
  VisuallyHidden,
} from '@chakra-ui/react';
import { Transactions } from '../../pages/api/types/Transaction';
import { useAccountTransactions } from '../data-access/useAccountTransactions';
import { TransactionCategory } from '../../pages/api/types/TransactionCategory';
import { getTransactionsByCategory } from '../util/get-filtered-transactions';
import { getTransactionsTotal } from '../util/get-transactions-total';
import FormattedDate from '../ui/FormattedDate';
import { MonthSelector } from './MonthSelector';

interface OwnProps {
  category: TransactionCategory;
}

const getTableHeading = () => (
  <Thead>
    <Tr>
      <Th /> {/* Logo */}
      <Th>Merchant</Th>
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
      <Td>{transaction.merchantName}</Td>
      <Td isNumeric>{transaction.amount.toFixed(2)}</Td>
      <Td>
        <FormattedDate date={new Date(transaction.date)} />
      </Td>
    </Tr>
  ));

export const CategoryDetail: FC<OwnProps> = (props: OwnProps) => {
  const { category } = props;

  const { transactions, isLoading, isError } = useAccountTransactions();

  const filteredTransactions = getTransactionsByCategory(
    transactions,
    category
  );
  console.log(filteredTransactions);

  const total = getTransactionsTotal(filteredTransactions);

  const tableHeading = getTableHeading();
  const tableRows = getTableRows(filteredTransactions);

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
        <MonthSelector />
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
