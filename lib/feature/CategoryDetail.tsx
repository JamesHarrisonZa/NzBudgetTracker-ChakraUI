import { FC } from 'react';
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Heading,
  Flex,
  Center,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { useAccountTransactions } from '../data-access/useAccountTransactions';
import { AccountTransactions } from '../data-access/accountTransaction';
import { TransactionCategory } from '../util/transaction-categories';
import { getFilteredTransactions } from '../util/get-filtered-transactions';
import { getTransactionsTotal } from '../util/get-transactions-total';

interface OwnProps {
  category: TransactionCategory;
}

const getTableHeading = () => {
  return (
    <Thead>
      <Tr>
        <Th>Merchant</Th>
        <Th>Amount</Th>
        <Th>Date</Th>
      </Tr>
    </Thead>
  );
};

const getTableRows = (filteredTransactions: AccountTransactions) => {
  return filteredTransactions.map((transaction, i) => {
    return (
      <Tr key={i}>
        <Td>{transaction.merchantName}</Td>
        <Td isNumeric>{transaction.amount}</Td>
        <Td>{transaction.date}</Td>
      </Tr>
    );
  });
};

export const CategoryDetail: FC<OwnProps> = (props: OwnProps) => {
  const { category } = props;

  const { transactions, isLoading, isError } = useAccountTransactions();

  const filteredTransactions = getFilteredTransactions(transactions, category);
  const total = getTransactionsTotal(filteredTransactions);

  const tableHeading = getTableHeading();
  const tableRows = getTableRows(filteredTransactions);

  return (
    <Flex direction="column" flexGrow={1}>
      <Center>
        <Heading>{category}</Heading>
      </Center>
      <Center>
        <Heading>${total}</Heading>
      </Center>
      <TableContainer>
        {/* TODO match with colour theme */}
        <Table variant="striped" colorScheme="blue">
          {tableHeading}
          <Tbody>{tableRows}</Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};
