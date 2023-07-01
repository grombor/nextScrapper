'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Results = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    async function getResults() {
      try {
        const response = await axios.post('http://localhost:3000/api/getResults', {
          uuids: [
            "fddd59e5-f71d-416a-bd92-18ad252a2d83",
          ]
        });
        setResult(response.data);
        console.log('response', response);
      } catch (error) {
        console.error(error);
      }

      setIsLoading(false);
    }

    getResults();
  }, []);

  return (
    <div>
      <h1>Wyniki:</h1>
      {isLoading ? (
        <p>Ładowanie...</p>
      ) : (
        <ul>
          {result.map((item) => (
            <li key={item.uuid}>
              <p>Nazwa: {item.name}</p>
              <p>URL: {item.url}</p>
              <p>Selektor: {item.selector}</p>
              <p>Wartość: {item.value}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Results;
