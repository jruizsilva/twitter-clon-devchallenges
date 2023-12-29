import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { useEffect } from 'react'

import theme from './theme/theme'

import { MainRouter } from 'routes/MainRouter'
import { useLoadUserData } from 'business/utils/useLoadUserData'

export function App() {
  const { loadUserData } = useLoadUserData()

  useEffect(() => {
    loadUserData()
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <MainRouter />
    </ChakraProvider>
  )
}
