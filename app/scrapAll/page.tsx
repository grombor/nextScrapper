'use client';

import React from 'react'
import { useState, useEffect } from 'react';
import ScrapAllTemplate from '../components/templates/scrapAllTemplate'

const ScrapAll = () => {
const [scraps, setScraps] = useState([])
    
async function getScraps() {
    try {
        const response = await fetch('http://localhost:3000/api/getScraps');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setScraps(data.data)
        return data.data;
      } catch (error) {
        console.error('Error fetching scraps:', error);
        throw error;
      }
}

useEffect(() => {
    getScraps()

}, [])


  return (
    <ScrapAllTemplate data={scraps} />
  )
}

export default ScrapAll