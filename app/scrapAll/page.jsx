'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Checkbox, Stack } from '@chakra-ui/react';
import AccordionComponent from '../../app/components/molecues/AccordionComponent';

export default function MyComponent() {
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getScrapAll() {
      setIsLoading(true);
      try {
        const res = await axios.get('http://localhost:3000/api/getScrapAll');
        setResult(res.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }

    getScrapAll();
  }, []);

  return <AccordionComponent props={result} />;
}
