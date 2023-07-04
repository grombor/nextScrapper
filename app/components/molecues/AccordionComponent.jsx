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
  Checkbox,
} from '@chakra-ui/react';
import { useState } from 'react';
import Link from 'next/link';
import ScrapTableRow from './ScrapTableRow';
import ScrapTableHeader from './ScrapTableHeader';

const AccordionComponent = ({ props }) => {
  const [selectedUUIDs, setSelectedUUIDs] = useState([]);

  const handleCheckboxChange = (uuid) => {
    console.log(uuid)
    if (selectedUUIDs.includes(uuid)) {
      setSelectedUUIDs(selectedUUIDs.filter((id) => id !== uuid));
    } else {
      setSelectedUUIDs([...selectedUUIDs, uuid]);
    }
  };

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
                      <Checkbox
                        px={'1em'}
                        onChange={() => handleCheckboxChange(item.uuid)}
                      >
                        &nbsp;
                      </Checkbox>
                      {item.name}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Table variant="simple">
                    <ScrapTableHeader />
                    <Tbody>
                      {item?.scraps.map((scrap) => {
                        return (
                          <ScrapTableRow
                            key={scrap.uuid}
                            {...scrap}
                            // handleCheckboxChange={handleCheckboxChange}
                          />
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
