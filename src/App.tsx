import { Center, Spinner } from '@chakra-ui/react'
import { useEffect } from 'react'

import { useStore } from './store/useStore'

import { MainRouter } from 'routes/MainRouter'
import { useUserQuery } from 'hooks/queries/useUserQuery'

export function App() {
  const { user, isPending } = useUserQuery()
  const { setUserAuthenticated } = useStore()

  useEffect(() => {
    if (user === undefined) {
      return
    }
    setUserAuthenticated(user)
  }, [user, setUserAuthenticated])

  if (isPending) {
    return (
      <Center height={'100vh'}>
        <Spinner />
      </Center>
    )
  }

  return <MainRouter />
}
