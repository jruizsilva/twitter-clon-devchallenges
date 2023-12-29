import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

import theme from './theme/theme'

import { MainRouter } from 'routes/MainRouter'

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <MainRouter />
    </ChakraProvider>
  )
}
