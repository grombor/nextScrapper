import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import React from 'react';

const AccordionComponent = ({ props }) => {
  return (
    <Accordion allowToggle>
       {Array.isArray(props) &&
        props.map((item) => {
        return (
          <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
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
        )
      })}


    </Accordion>
  );
};

export default AccordionComponent;
