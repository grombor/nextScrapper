// @example

// form values:
// "url": "https://cheerio.js.org/docs/basics/loading",
// "selector": "title",

// request value:
// {
//   "url": "https://cheerio.js.org/docs/basics/loading",
//   "selectors": [
//     {
//       "uuid": "d039a4cb-c61d-4b78-b689-d3ac8d1dd188",
//       "name": "title",
//       "selector": "title",
//       "isChecked": true
//     }
//   ]
// }


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

    const scrapData = {
      "url": url,
      "selectors": [
        {
          "uuid": "none",
          "name": "scrapCheck",
          "selector": selector,
          "isChecked": false
        }
      ]
    }

    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/api/scrapData', scrapData);
      console.log(response.data)
      setResult(response.data);
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
        {result && (<div>Result: 
          <p>URL: {result.url}</p>
          <p>Selector: {result.selectors[0].selector}</p>
          <p>Value: {result.selectors[0].value}</p>
          </div>)
          }
      </Box>
    </Container>
  );
}
