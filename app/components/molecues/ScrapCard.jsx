import React, { useState } from 'react';
import {
  Box,
  Text,
  Heading,
  Flex,
  Spacer,
  Checkbox,
} from '@chakra-ui/react';

const ScrapCard = ({ data, onCheckboxChange }) => {
  const [isChecked, setIsChecked] = useState(data.isChecked);

  const handleCheckboxChange = () => {
    const newCheckedValue = !isChecked;
    setIsChecked(newCheckedValue);
    onCheckboxChange(data.id, newCheckedValue);
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
      <Flex alignItems="center">
        <Box>
          <Heading as="h2" size="lg">
            {data.name}
          </Heading>
          <Text fontSize="md" color="gray.600">
            {data.url}
          </Text>
        </Box>
        <Spacer />
        <Checkbox
          size="lg"
          id={data.id}
          isChecked={isChecked}
          onChange={handleCheckboxChange}
        >
          {isChecked ? 'Zaznaczone' : 'Nie zaznaczone'}
        </Checkbox>
      </Flex>
    </Box>
  );
};

export default ScrapCard;
