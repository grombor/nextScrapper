'use client';

import React, { useState } from 'react';
import ScrapCard from '../molecues/ScrapCard';

const ScrapAllTemplate = ({ data }) => {
  const [cardsData, setCardsData] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
  }

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };


  return (
    <form onSubmit={handleSubmit}>
      {data.map((item) => {
        return <ScrapCard data={item} key={item.id} />
      })}
      <button>click</button>
    </form>
  );
};

export default ScrapAllTemplate;
