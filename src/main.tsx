import ReactDOM from 'react-dom/client'
import { ChakraProvider, theme, ColorModeScript } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

import { App } from 'App'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme}>
    {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <App />
      <Toaster />
    </QueryClientProvider>
  </ChakraProvider>
)
