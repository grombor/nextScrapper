'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Checkbox, Stack } from '@chakra-ui/react';
import AccordionComponent from '../components/molecues/AccordionComponent';

export default function MyComponent() {
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getScrapAll() {
      try {
        const res = await axios.get('http://localhost:3000/api/getScrapAll');
        setResult(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    getScrapAll();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        'http://localhost:3000/api/scrapAll',
        scrapes
      );
      setResult(response.data.result);
      console.log('response', response);
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  return (
    <Stack spacing={5} direction="column">
      <AccordionComponent props={result} />
      <Button py="3em" onClick={handleFormSubmit}>
        Scrap
      </Button>
    </Stack>
  );
}
