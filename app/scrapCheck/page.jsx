'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Center, Container, Input } from '@chakra-ui/react';

export default function MyComponent() {
  const [url, setUrl] = useState('');
  const [selector, setSelector] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/api/checkSelector', { url, selector });
      setResult(response.data.result);
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  return (
    <Container size={'2xl'}>
      <form py='2em' onSubmit={handleFormSubmit}>
      <Input mt='1em' placeholder='Paste URL here'  onChange={(e) => setUrl(e.target.value)} />
      <Input mt='1em' placeholder='Selektor'  onChange={(e) => setSelector(e.target.value)} />
      <Center mt='1em'>
      <Button mt='1em' colorScheme='blue' onClick={handleFormSubmit}>Check Scrape</Button>
      </Center>
      </form>
      <Center mt='2.5em'>
      {isLoading && <div>Czekaj...</div>}
      {result && <div>Wynik: {result}</div>}
      </Center>
    </Container>
  );
}
