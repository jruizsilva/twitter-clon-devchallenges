import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { MainRouter } from 'routes/MainRouter'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainRouter />
      <Toaster />
    </QueryClientProvider>
  )
}
