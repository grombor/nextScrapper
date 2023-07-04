import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Stack,
  Button,
  Thead,
  Table,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';
import { useState } from 'react';
import Link from 'next/link';
import ScrapTableRow from './ScrapTableRow';

const AccordionComponent = ({ props }) => {
  const [selectedUUIDs, setSelectedUUIDs] = useState([]);

  const handleCheckboxChange = (uuid) => {
    if (selectedUUIDs.includes(uuid)) {
      setSelectedUUIDs(selectedUUIDs.filter((id) => id !== uuid));
    } else {
      setSelectedUUIDs([...selectedUUIDs, uuid]);
    }
  };

  // const handleFormSubmit = () => {
  //   // Przygotowanie danych do przekierowania
  //   const query = { uuids: selectedUUIDs };
  //   const queryString = new URLSearchParams(query).toString();
  //   const href = `/results?${queryString}`;

  // };

  return (
    <Stack spacing={5} direction="column">
      <Accordion allowToggle>
        {Array.isArray(props) &&
          props.map((item) => {
            return (
              <AccordionItem key={item.name}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      {item.name}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>Name</Th>
                        <Th>Address</Th>
                        <Th>Selector</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {item?.scraps.map((scrap) => {
                        return (
                          <ScrapTableRow key={scrap.uuid} {...scrap} handleCheckboxChange={handleCheckboxChange} />
                        );
                      })}
                    </Tbody>
                  </Table>
                </AccordionPanel>
              </AccordionItem>
            );
          })}
      </Accordion>
      <Link href={{ pathname: '/results', query: { uuids: selectedUUIDs } }}>
  <Button>Scrap</Button>
</Link>
    </Stack>
  );
};

export default AccordionComponent;
