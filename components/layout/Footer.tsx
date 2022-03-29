import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FC } from 'react';
import Link from 'next/link';

const Footer: FC = () => {
  const gradientStartColour = useColorModeValue('cyan.400', 'cyan.600');
  const gradientEndColour = useColorModeValue('pink.500', 'purple.600');
  const bgGradient = `linear(to-r, ${gradientStartColour}, ${gradientEndColour})`;

  return (
    <Box bgGradient={bgGradient}>
      <Container
        as={Stack}
        maxW={'6xl'}
        minH={20}
        maxH={20}
        px={10}
        direction={{ base: 'column', md: 'row' }}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
        spacing={4}
      >
        <Stack direction={'row'} spacing={6}>
          <Link href={'/'}>Home</Link>
          <Link href={'/info/about'}>About</Link>
          <Link href={'/info/contact'}>Contact</Link>
        </Stack>
        <Text>© 2022 James Harrison</Text>
      </Container>
    </Box>
  );
};

export default Footer;
