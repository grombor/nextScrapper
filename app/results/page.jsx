'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

const Results = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedUUIDs = searchParams.getAll('uuids');

  useEffect(() => {
    setIsLoading(true);

    async function getResults() {
      try {
        const response = await axios.post('/api/getResults', {
          uuids: selectedUUIDs,
        });
        setResult(response.data);
        console.log('response', response);
      } catch (error) {
        console.error(error);
      }

      setIsLoading(false);
    }

    if (selectedUUIDs.length > 0) {
      getResults();
    }
  }, []);

  return (
    <div>
      <h1>Wyniki:</h1>
      {isLoading ? (
        <p>Ładowanie...</p>
      ) : (
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nazwa</Th>
              <Th>URL</Th>
              <Th>Selektor</Th>
              <Th>Wartość</Th>
            </Tr>
          </Thead>
          <Tbody>
            {result.map((item) => (
              <Tr key={item.uuid}>
                <Td>{item.name}</Td>
                <Td>
                  <Link href={item.url}>
                    {item.url}
                  </Link>
                </Td>
                <Td>{item.selector}</Td>
                <Td>{item.value}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </div>
  );
};

export default Results;
