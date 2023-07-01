'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container, Input } from '@chakra-ui/react';

export default function MyComponent() {
  const [url, setUrl] = useState('');
  const [selector, setSelector] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Dodana nowa zmienna isLoading

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Ustawienie isLoading na true

    try {
      const response = await axios.post('http://localhost:3000/api/checkSelector', { url, selector });
      setResult(response.data.result);
      console.log('response', response);
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false); // Ustawienie isLoading na false po otrzymaniu odpowiedzi
  };

  return (
    <Container>
      <form py='2em' onSubmit={handleFormSubmit}>
      <Input mt='1em' placeholder='Paste URL here'  onChange={(e) => setUrl(e.target.value)} />
      <Input mt='1em' placeholder='Selektor'  onChange={(e) => setSelector(e.target.value)} />
      <Button mt='1em' colorScheme='blue' onClick={handleFormSubmit}>Check Scrape</Button>
      </form>
      {isLoading && <div>Czekaj...</div>} {/* Wyświetlanie napisu "Czekaj..." podczas ładowania */}
      {result && <div>Wynik: {result}</div>}
    </Container>
  );
}