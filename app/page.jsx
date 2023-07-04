"use client"

import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const HomePage = () => {
  return (


    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Column 1</Th>
          <Th>Column 2</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Row 1, Column 1</Td>
          <Td>Row 1, Column 2</Td>
        </Tr>
        <Tr>
          <Td>Row 2, Column 1</Td>
          <Td>Row 2, Column 2</Td>
        </Tr>
      </Tbody>
      <Thead>
        <Tr>
          <Th>Column A</Th>
          <Th>Column B</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Row 1, Column A</Td>
          <Td>Row 1, Column B</Td>
        </Tr>
        <Tr>
          <Td>Row 2, Column A</Td>
          <Td>Row 2, Column B</Td>
        </Tr>
        <Tr>
          <Td>Row 3, Column A</Td>
          <Td>Row 3, Column B</Td>
        </Tr>
      </Tbody>
    </Table>

  )
}

export default HomePage