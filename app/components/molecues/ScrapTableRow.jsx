import { Tr, Td, Checkbox } from '@chakra-ui/react';
import React from 'react';

const ScrapTableRow = ({ name, url, selector, uuid, handleCheckboxChange }) => {
  return (
    <Tr>
      <Td>
        <Checkbox px={'1em'} onChange={() => handleCheckboxChange(uuid)}>
          &nbsp;
        </Checkbox>
        {name}
      </Td>
      <Td>{url}</Td>
      <Td>{selector}</Td>
    </Tr>
  );
};

export default ScrapTableRow;
