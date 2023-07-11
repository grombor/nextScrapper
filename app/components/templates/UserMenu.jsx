import { Link } from '@chakra-ui/next-js';
import { Box, Center } from '@chakra-ui/react';

const UserMenu = () => {
  return (
    <Box w="100%" p="6">
      <Center>
        <Link href="/" mr='2em'>Strona Główna</Link>
        <Link href="/scrapCheck" mr='2em'>Sprawdź Scrap</Link>
        <Link href="/scrapData" mr='2em'>Scrapuj</Link>
        <Link href="/scrapAll" mr='2em'>Scrapuj wiele</Link>
      </Center>
    </Box>
  );
};

export default UserMenu;
