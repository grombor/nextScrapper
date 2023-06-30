'use client';

import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" />
        <input type="text" value={selector} onChange={(e) => setSelector(e.target.value)} placeholder="Selektor" />
        <button type="submit">Scrapuj</button>
      </form>
      {isLoading && <div>Czekaj...</div>} {/* Wyświetlanie napisu "Czekaj..." podczas ładowania */}
      {result && <div>Wynik: {result}</div>}
    </div>
  );
}
