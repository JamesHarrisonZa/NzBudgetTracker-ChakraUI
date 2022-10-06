import { Tr, Td, Image } from '@chakra-ui/react';
import { FC } from 'react';
import { Transactions } from '../../../pages/api';
import FormattedDate from '../FormattedDate';

interface DetailTableRowsProps {
  transactions: Transactions;
}

const getTableRows = (transactions: Transactions) =>
  transactions.map((transaction, i) => (
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

export const DetailTableRows: FC<DetailTableRowsProps> = ({ transactions }) => {
  const tableRows = getTableRows(transactions);

  return <>{tableRows}</>;
};
