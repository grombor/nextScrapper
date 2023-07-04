import { Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const ScrapTableHeader = () => {
  return (
    <Thead>
    <Tr>
      <Th>Name</Th>
      <Th>Address</Th>
      <Th>Selector</Th>
    </Tr>
  </Thead>
  )
}

export default ScrapTableHeader