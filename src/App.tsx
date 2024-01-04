import {
  Center,
  ChakraProvider,
  ColorModeScript,
  Spinner
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import toast from 'react-hot-toast'

import theme from './theme/theme'

import { MainRouter } from 'routes/MainRouter'
import { useUser } from 'business/user/useUser'
import { useAuthStore } from 'business/auth/useAuthStore'

export function App() {
  const { setUser } = useAuthStore()
  const { fetchUserData } = useUser()
  const { data, isLoading, error } = useQuery('fetchUserData', fetchUserData)

  // useEffect(() => {
  //   const AUTH_TOKEN = localStorage.getItem('AUTH_TOKEN')

  //   if (AUTH_TOKEN === null) {
  //     setIsFetching(false)

  //     return
  //   }

  //   fetchUserData()
  //     .then((user) => {
  //       setUser(user)
  //       toast.success('Successfully login!', {
  //         id: 'login',
  //         position: 'bottom-right'
  //       })
  //     })
  //     .catch((err) => {
  //       console.error(err)
  //       localStorage.removeItem('AUTH_TOKEN')
  //     })
  // }, [fetchUserData, setUser, setIsFetching])

  useEffect(() => {
    // Aquí puedes realizar cualquier acción con los datos, isLoading, error, etc.
    if (isLoading) {
      // Puedes realizar alguna acción mientras los datos están cargando
      console.log('Cargando datos...')
    }
    if (error) {
      console.dir(error)
    }

    if (data != null) {
      // Puedes hacer algo con los datos obtenidos
      console.log('Datos obtenidos:', data)
      setUser(data)
      toast.success('Successfully login!', {
        id: 'login',
        position: 'bottom-right'
      })
    }
  }, [data, isLoading, error, setUser])

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {isLoading ? (
        <Center height={'100vh'}>
          <Spinner size={'lg'} />
        </Center>
      ) : (
        <MainRouter />
      )}
    </ChakraProvider>
  )
}
