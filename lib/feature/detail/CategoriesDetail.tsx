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
import { Transactions, TransactionCategory } from '../../../pages/api';
import { useAccountTransactions } from '../../data-access/useAccountTransactions';
import { getTransactionsByCategories, getTransactionsTotal } from '../../util';

interface OwnProps {
  heading: string;
  categories: TransactionCategory[];
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
        <Image src={transaction.logoUrl ?? ''} boxSize="50px" alt="" />
      </Td>
      <Td>{transaction.merchantName}</Td>
      <Td isNumeric>{transaction.amount.toFixed(2)}</Td>
      <Td>
        <FormattedDate date={new Date(transaction.date)} />
      </Td>
    </Tr>
  ));

export const CategoriesDetail: FC<OwnProps> = (props: OwnProps) => {
  const { categories, heading } = props;

  const { transactions, isLoading, isError } = useAccountTransactions();

  const filteredTransactions = getTransactionsByCategories(
    transactions,
    categories
  );
  console.log(filteredTransactions);

  const total = getTransactionsTotal(filteredTransactions);

  const tableHeading = getTableHeading();
  const tableRows = getTableRows(filteredTransactions);

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
