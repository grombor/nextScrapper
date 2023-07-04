import React from 'react'

const ScrapResultsTableRow = ({ props }) => {
  return (
    <Tr key={props.uuid}>
    <Td>{props.name} name</Td>
    <Td>
      {/* <Link href={item.url}> */}
        {item.url} url
      {/* </Link> */}
    </Td>
    <Td>{props.selector} selector</Td>
    <Td>{props.value} value</Td>
  </Tr>
  )
}

export default ScrapResultsTableRow