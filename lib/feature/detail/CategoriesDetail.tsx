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
import { DatePopover } from '../DatePopover';
import { TransactionCategory } from '../../../pages/api';
import { useAccountTransactions } from '../../data-access/useAccountTransactions';
import { getTransactionsByCategories, getTransactionsTotal } from '../../util';
import { DetailTableHeading } from '../../ui/detail/DetailTableHeading';
import { DetailTableRows } from '../../ui/detail/DetailTableRows';

interface OwnProps {
  heading: string;
  categories: TransactionCategory[];
}

export const CategoriesDetail: FC<OwnProps> = (props: OwnProps) => {
  const { categories, heading } = props;

  const { transactions, isLoading, isError } = useAccountTransactions();

  const filteredTransactions = getTransactionsByCategories(
    transactions,
    categories
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
