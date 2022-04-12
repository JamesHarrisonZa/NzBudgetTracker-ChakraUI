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
import { TransactionCategory } from '../util/transaction-categories';
import { getFilteredTransactions } from '../util/get-filtered-transactions';
import { getTransactionsTotal } from '../util/get-transactions-total';

interface OwnProps {
  category: TransactionCategory;
}

export const CategoryDetail: FC<OwnProps> = (props: OwnProps) => {
  const { category } = props;

  const { transactions, isLoading, isError } = useAccountTransactions();

  const filteredTransactions = getFilteredTransactions(transactions, category);
  const total = getTransactionsTotal(filteredTransactions);

  return (
    <Flex direction="column" flexGrow={1}>
      <Center>
        <Heading>{category}</Heading>
      </Center>
      <TableContainer>
        {/* TODO match with colour theme */}
        <Table variant="striped" colorScheme="blue">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Flex>
  );
};
