import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { useEffect } from 'react'

import theme from './theme/theme'

import { MainRouter } from 'routes/MainRouter'
import { userService } from 'services/userService'

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <MainRouter />
    </ChakraProvider>
  )
}
