import {
  Center,
  ChakraProvider,
  ColorModeScript,
  Spinner
} from '@chakra-ui/react'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

import theme from './theme/theme'

import { MainRouter } from 'routes/MainRouter'
import { useUser } from 'business/user/useUser'
import { useAuthStore } from 'business/auth/useAuthStore'

export function App() {
  const { fetchUserData } = useUser()
  const { setUser, user, isFetching, setIsFetching } = useAuthStore()

  console.log(user)

  useEffect(() => {
    const AUTH_TOKEN = localStorage.getItem('AUTH_TOKEN')

    if (AUTH_TOKEN === null) {
      setIsFetching(false)

      return
    }

    fetchUserData()
      .then((user) => {
        setUser(user)
        toast.success('Successfully login!', {
          id: 'login',
          position: 'bottom-right'
        })
      })
      .catch((err) => {
        console.error(err)
        localStorage.removeItem('AUTH_TOKEN')
      })
  }, [fetchUserData, setUser, setIsFetching])

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {isFetching ? (
        <Center height={'100vh'}>
          <Spinner size={'lg'} />
        </Center>
      ) : (
        <MainRouter />
      )}
    </ChakraProvider>
  )
}
