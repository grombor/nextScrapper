'use client'

import React, { useState } from 'react';
import axios from 'axios';

export default function MyComponent() {
  const [url, setUrl] = useState('');
  const [selector, setSelector] = useState('');
  const [result, setResult] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('selector', selector)
    console.log('url', url)

    try {
        const response = await axios.post('http://localhost:3000/api/test', { url, selector });
      setResult(response.data.result);
      console.log('response', response)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" />
        <input type="text" value={selector} onChange={(e) => setSelector(e.target.value)} placeholder="Selektor" />
        <button type="submit">Scrapuj</button>
      </form>
      {result && <div>Wynik: {result}</div>}
    </div>
  );
}
