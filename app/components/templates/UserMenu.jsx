import { Link } from '@chakra-ui/next-js';
import { Box, Center } from '@chakra-ui/react';

const UserMenu = () => {
  return (
    <Box w="100%" p="6">
      <Center>
        <Link mr='2em' href="/">Strona Główna</Link>
        <Link href="/scrape">Sprawdź swój Scrap</Link>
      </Center>
    </Box>
  );
};

export default UserMenu;
