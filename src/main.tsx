import ReactDOM from 'react-dom/client'
import {
  ChakraProvider,
  ColorModeScript,
  type ThemeConfig,
  extendTheme
} from '@chakra-ui/react'

import { App } from 'App'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({ config })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </>
)
