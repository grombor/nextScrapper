'use client';

import React, { useState } from 'react';
import { Box, Button, Center, Container, Input } from '@chakra-ui/react';
import axios from 'axios';

export default function MyComponent() {
  const [url, setUrl] = useState('');
  const [selector, setSelector] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const currentDate = new Date().toISOString();

    const scrapData = {
      uuid: "d039a4cb-c61d-4b78-b689-d3ac8d1dd188",
      name: "Test",
      createdDate: currentDate,
      lastModifiedDate: currentDate,
      isChecked: false,
      author: "System",
      scraps: [
        {
          url: "https://www.example.com",
          selectors: [
            {
              uuid: "3a1e98b8-173c-4a5c-bbc1-125812212e36",
              name: "test",
              selector: "title",
              value: "",
              isChecked: true,
            },
          ],
        },
      ],
    };
    
    

    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/api/scrapData', scrapData);
      setResult(response.data[0].uuid);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <Container size={'2xl'}>
      <form py="2em" onSubmit={handleFormSubmit}>
        <Input
          mt="1em"
          placeholder="Paste URL here"
          onChange={(e) => setUrl(e.target.value)}
        />
        <Input
          mt="1em"
          placeholder="Selektor"
          onChange={(e) => setSelector(e.target.value)}
        />
        <Center mt="1em">
          <Button mt="1em" colorScheme="blue" onClick={handleFormSubmit}>
            Check Scrape
          </Button>
        </Center>
      </form>
      <Box mt="2.5em">
        {isLoading && <div>Wait...</div>}
        {result && (<div>Result:&nbsp;
          {result}
          </div>)
          }
      </Box>
    </Container>
  );
}
