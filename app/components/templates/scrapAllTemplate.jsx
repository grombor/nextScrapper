'use client';

import React, { useState } from 'react';
import ScrapCard from '../molecues/ScrapCard';

const ScrapAllTemplate = ({ data }) => {
  const [cardsData, setCardsData] = useState(data);
  const [selectedIds, setSelectedIds] = useState([]);

  const handleCheckboxChange = (id, isChecked) => {
    if (isChecked) {
      setSelectedIds([...selectedIds, id]); // Dodaj ID do zaznaczonych
    } else {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id)); // Usuń ID z zaznaczonych
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedIds); // Tablica z zaznaczonymi ID
  };


  return (
    <form onSubmit={handleSubmit}>
      {data.map((item) => (
        <ScrapCard
          data={item}
          key={item.id}
          onCheckboxChange={handleCheckboxChange}
        />
      ))}
      <button type="submit">click</button>
    </form>
  );
};

export default ScrapAllTemplate;
