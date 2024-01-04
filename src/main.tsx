import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from 'react-query'

import { App } from 'App'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
