'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, Container } from '@chakra-ui/react'

export function Providers({ 
    children 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Container maxW='4xl'>
        {children}
        </Container>
      </ChakraProvider>
    </CacheProvider>
  )
}