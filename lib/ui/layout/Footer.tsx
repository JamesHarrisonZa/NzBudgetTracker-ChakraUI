import { FC } from 'react';
import Link from 'next/link';
import { Box, Flex, Text, useColorModeValue, Stack } from '@chakra-ui/react';

const Footer: FC = () => {
  const gradientStartColour = useColorModeValue('cyan.400', 'cyan.600');
  const gradientEndColour = useColorModeValue('pink.500', 'purple.600');
  const bgGradient = `linear(to-r, ${gradientStartColour}, ${gradientEndColour})`;

  return (
    <Box bgGradient={bgGradient} px={10}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Stack direction={'row'} spacing={6}>
          <Link href={'/'}>Home</Link>
          <Link href={'/info/about'}>About</Link>
          <Link href={'/info/contact'}>Contact</Link>
        </Stack>
        <Text>© 2022 James Harrison</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
