import { MainRouter } from 'routes/MainRouter'
import { useUserQuery } from 'hooks/queries/useUserQuery'

export function App() {
  useUserQuery()

  return <MainRouter />
}
