'use client';

import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Flex,
  Spacer,
  Checkbox,
  Center,
} from '@chakra-ui/react';

const ScrapCard = ({ data }) => {
  const handleCheckboxChange = () => {
    onCheckboxChange(id, !isChecked);
  };
  

  return (
    <Card my={'2em'}>
      <CardBody>
        <Flex>
          <div>
            <Heading as="h2" size="lg">
              {data.name}
            </Heading>
            <Text>
              {data.url}
            </Text>
          </div>
          <Spacer />
          <Center>
            <Checkbox size='lg' 
            id={data.id} 
            defaultChecked={data.isChecked} 
            onChange={() => handleCheckboxChange(data.id)}/>
          </Center>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ScrapCard;
