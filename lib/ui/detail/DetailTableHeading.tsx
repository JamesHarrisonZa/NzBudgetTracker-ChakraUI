import { Thead, Tr, Th } from '@chakra-ui/react';
import { FC } from 'react';

export const DetailTableHeading: FC = () => {
  return (
    <Thead>
      <Tr>
        <Th /> {/* Logo */}
        <Th>Merchant</Th>
        <Th>Amount</Th>
        <Th>Date</Th>
      </Tr>
    </Thead>
  );
};
