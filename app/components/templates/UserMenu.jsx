import { Link } from '@chakra-ui/next-js';
import { Box, Center } from '@chakra-ui/react';

const UserMenu = () => {
  return (
    <Box w="100%" p="6">
      <Center>
        <Link href="/" mr='2em'>Home</Link>
        <Link href="/scrapCheck" mr='2em'>Check Scrap</Link>
        <Link href="/scrapData" mr='2em'>Scrap from JSON</Link>
        <Link href="/addScrap" mr='2em'>Add scrap to DB</Link>
        <Link href="/scrapAll" mr='2em'>Scrap from DB</Link>
      </Center>
    </Box>
  );
};

export default UserMenu;
