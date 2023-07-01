import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Checkbox,
} from '@chakra-ui/react';
import React from 'react';

const AccordionComponent = ({ props }) => {
  return (
    <Accordion allowToggle>
      {Array.isArray(props) &&
        props.map((item) => {
          return (
            <AccordionItem key={item.name}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Checkbox px={'1em'}>&nbsp;</Checkbox>
                    {item.name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p>Address: {item.url}</p>
                <p>Selector: {item.selector}</p>
              </AccordionPanel>
            </AccordionItem>
          );
        })}
    </Accordion>
  );
};

export default AccordionComponent;
