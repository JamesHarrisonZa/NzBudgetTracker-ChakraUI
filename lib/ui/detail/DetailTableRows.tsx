import { FC } from 'react';
import { Tr, Td, Image } from '@chakra-ui/react';
import { Transactions } from '../../../pages/api';
import FormattedDate from '../FormattedDate';

type Variant = 'merchant' | 'description';

interface DetailTableRowsProps {
  transactions: Transactions;
  variant?: Variant;
}

const getTableRows = (transactions: Transactions, variant: Variant) =>
  transactions.map((transaction, i) => {
    const merchantNameOrDescription =
      variant === 'merchant'
        ? transaction.merchantName
        : transaction.description;

    return (
      <Tr key={i}>
        <Td py="0">
          <Image
            src={transaction.logoUrl ?? '/images/missing-image-icon.png'}
            boxSize="50px"
            alt=""
          />
        </Td>
        <Td>{merchantNameOrDescription}</Td>
        <Td isNumeric>{transaction.amount.toFixed(2)}</Td>
        <Td>
          <FormattedDate date={new Date(transaction.date)} />
        </Td>
      </Tr>
    );
  });

export const DetailTableRows: FC<DetailTableRowsProps> = ({
  transactions,
  variant = 'merchant',
}) => {
  const tableRows = getTableRows(transactions, variant);

  return <>{tableRows}</>;
};
