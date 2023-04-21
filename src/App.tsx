import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

import theme from './theme/theme'

import { MainRouter } from 'MainRouter'

export function App() {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <MainRouter />
    </ChakraProvider>
  )
}
