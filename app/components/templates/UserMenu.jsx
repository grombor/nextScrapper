import { Link } from '@chakra-ui/next-js';
import { Box, Center } from '@chakra-ui/react';

const UserMenu = () => {
  return (
    <Box w="100%" p="6">
      <Center>
        <Link mr='2em' href="/">Strona Główna</Link>
        <Link href="/scrap">Sprawdź swój Scrap</Link>
        <Link href="/scrapAll">Scrapuj</Link>
      </Center>
    </Box>
  );
};

export default UserMenu;
