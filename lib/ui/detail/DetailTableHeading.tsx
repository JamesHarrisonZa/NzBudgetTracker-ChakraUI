import { FC } from 'react';
import { Thead, Tr, Th } from '@chakra-ui/react';

type Variant = 'merchant' | 'description';

interface DetailTableHeadingProps {
  variant?: Variant;
}

export const DetailTableHeading: FC<DetailTableHeadingProps> = ({
  variant = 'merchant',
}) => {
  return (
    <Thead>
      <Tr>
        <Th /> {/* Logo image */}
        <Th>{variant}</Th>
        <Th>Amount</Th>
        <Th>Date</Th>
      </Tr>
    </Thead>
  );
};
