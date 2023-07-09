import React from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { Banner } from './app'
import { cards } from './data/cards'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <ChakraProvider>
    <Banner cards={cards} />
  </ChakraProvider>
)