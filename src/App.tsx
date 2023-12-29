import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { useEffect } from 'react'

import theme from './theme/theme'

import { MainRouter } from 'routes/MainRouter'

export function App() {
  useEffect(() => {
    const jwt = localStorage.getItem('AUTH_TOKEN')

    console.log(jwt)
  })

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <MainRouter />
    </ChakraProvider>
  )
}
