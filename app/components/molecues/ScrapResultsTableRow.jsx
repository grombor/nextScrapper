import { Td, Tr } from '@chakra-ui/react'
import React from 'react'

const ScrapResultsTableRow = ({ props }) => {
  return (
    <Tr key={props?.uuid}>
    <Td>{props?.name}</Td>
    <Td>
        {props?.url}
    </Td>
    <Td>{props?.selector}</Td>
    <Td>{props?.value}</Td>
  </Tr>
  )
}

export default ScrapResultsTableRow