import React, { useState } from 'react';
import {
  Box,
  Text,
  Heading,
  Flex,
  Spacer,
  Checkbox,
} from '@chakra-ui/react';
import { TrashIcon } from 'chakra-ui-ionicons';

const ScrapCard = ({ data, onCheckboxChange }) => {
  const [isChecked, setIsChecked] = useState(data.isChecked);

  const handleCheckboxChange = () => {
    const newCheckedValue = !isChecked;
    setIsChecked(newCheckedValue);
    onCheckboxChange(data.id, newCheckedValue);
  };

  const handleDeleteClick = async (e) => {
    console.log(data.id); // Przekazujemy id do funkcji onDelete
    e.preventDefault();
    // setFormData({
    //   ...formData,
    //   selectors: selectors,
    // });
    // console.log('JSON result:', JSON.stringify(formData, null, 2));

    const response = await fetch('http://localhost:3000/api/deleteScrap', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Ustawiamy nagłówek Content-Type na application/json
      },
      body: JSON.stringify(data.id),
    });

    if (response.ok) {
      console.log('Scrap deleted successfully!');
    } else {
      console.error('Error deleting scrap.');
    }
  };

  return (
    <Flex alignItems="center">
      <Box flex="1">
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
      <TrashIcon 
        aria-label="Usuń"
        variant="ghost"
        onClick={(e) => handleDeleteClick(e)}
        ml={4} // Odległość od prawej strony
      />
    </Flex>
  );
};

export default ScrapCard;
