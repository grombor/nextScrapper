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

  const data = [
    {
      uuid: "83617c77-1450-4764-af67-3a0b98b74a3b",
      name: "name1",
      url: "https://www.google.co.uk/",
      selector: "title",
      value: 'value1',
      isChecked: true,
    },
    {
      uuid: "fddd59e5-f71d-416a-bd92-18ad252a2d83",
      name: "name2",
      url: "https://www.onet.pl/",
      selector: "title",
      value: 'value2',
      isChecked: false,
    },
  ];

  return <AccordionComponent props={data} />;
}
