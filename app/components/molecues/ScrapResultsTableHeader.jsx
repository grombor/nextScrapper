import { Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const ScrapResultsTableHeader = () => {
  return (
    <Thead>
    <Tr>
      <Th>Nazwa</Th>
      <Th>URL</Th>
      <Th>Selektor</Th>
      <Th>Wartość</Th>
    </Tr>
  </Thead>
  )
}

export default ScrapResultsTableHeader