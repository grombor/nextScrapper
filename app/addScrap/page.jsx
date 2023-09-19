'use client';

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  List,
  ListIcon,
  ListItem,
  Stack,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons';

const AddScrap = () => {
  const initialFormData = {
    name: '',
    createdDate: '',
    lastModifiedDate: '',
    isChecked: true,
    author: 'admin',
    url: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [selectors, setSelectors] = useState([]);
  const [selectorName, setSelectorName] = useState('');
  const [selectorValue, setSelectorValue] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      selectors: selectors,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      selectors: selectors,
    });
    console.log('JSON result:', JSON.stringify(formData, null, 2));

    const response = await fetch('http://localhost:3000/api/createScrap', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('Scrap created successfully!');
    } else {
      console.error('Error creating scrap.');
    }

  };

  const handlePlusClick = (e) => {
    e.preventDefault();
    const newSelector = {
      name: selectorName,
      selector: selectorValue,
      isChecked: true,
    };
    setSelectors((prevValue) => [...prevValue, newSelector]);
    setSelectorName('');
    setSelectorValue('');
  };

  const SelectorCard = ({ uuid }) => {
    const handleNameChange = (e) => {
      setSelectorName(e.target.value);
    };

    const handleValueChange = (e) => {
      setSelectorValue(e.target.value);
    };

    return (
      <FormControl key={uuid}>
        <FormLabel>Selector</FormLabel>
        <InputGroup>
          <Input
            placeholder="Selector name"
            onChange={handleNameChange}
            value={selectorName}
            name="selectorName"
            id="selectorName"
          />
          <Input
            placeholder="Selector value"
            onChange={handleValueChange}
            value={selectorValue}
            name="selectorValue"
            id="selectorValue"
          />
          <Button onClick={handlePlusClick} px={2}>Add</Button>
        </InputGroup>
      </FormControl>
    );
  };

  const handleDelete = (id) => {
    const newSelectors = selectors.filter(item => item.name !== id);
    setSelectors(newSelectors);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Site URL</FormLabel>
          <Input
            type="text"
            name="url"
            id="url"
            value={formData.url}
            onChange={handleChange}
          />
        </FormControl>

        <SelectorCard uuid={uuidv4()} />

        {selectors.length < 1 ? <Heading as='h3' size='md'>No selectors, make some</Heading> : <Heading as='h3' size='md'>Selectors</Heading>}
        <List spacing={3}>
          {selectors.map((item) => (
            <ListItem key={item.name}>
              <ListIcon as={MinusIcon} mr={3}/>
              {item.name} {item.selector}
              <Button size="xs" ml={3} onClick={() => handleDelete(item.name)}>
                <DeleteIcon />
              </Button>
            </ListItem>
          ))}
        </List>


        <Button type="submit">
          Save
        </Button>
      </Stack>
    </form>
  );
};

export default AddScrap;
