'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import ScrapResultsTableRow from '../components/molecues/ScrapResultsTableRow';
import { usePathname, useSearchParams } from 'next/navigation';
import ScrapResultsTableHeader from '../components/molecues/ScrapResultsTableHeader';

const Results = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedUUIDs = searchParams.getAll('uuids');

  useEffect(() => {
    setIsLoading(true);
    console.log(selectedUUIDs)

    async function getResults() {
      try {
        const response = await axios.post('/api/getScrapResults', {
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
          <ScrapResultsTableHeader />
          {result.map((item) => (
              <Tbody key={item.uuid}>
                {item.scraps.map((scrap => <ScrapResultsTableRow props={scrap} />))}
              </Tbody>
          ))}
        </Table>
      )}
    </div>
  );
};

export default Results;
