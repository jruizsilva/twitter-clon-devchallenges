import {
  Center,
  ChakraProvider,
  ColorModeScript,
  Spinner
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import theme from './theme/theme'

import { MainRouter } from 'routes/MainRouter'
import { useUser } from 'business/user/useUser'
import { useAuthStore } from 'business/auth/useAuthStore'

export function App() {
  const { fetchUserData } = useUser()
  const { user, setUser } = useAuthStore()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const AUTH_TOKEN = localStorage.getItem('AUTH_TOKEN')

    if (AUTH_TOKEN === null) {
      setLoading(false)

      return
    }

    fetchUserData()
      .then((user) => {
        setLoading(false)
        setUser(user)
        toast.success('Successfully login!', {
          id: 'login',
          position: 'bottom-right'
        })
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
        localStorage.removeItem('AUTH_TOKEN')
      })
  }, [])

  useEffect(() => {
    if (user === null) return
    const socket = new WebSocket('ws://localhost:8080/like') // Reemplaza con la URL correcta del servidor y el endpoint

    socket.addEventListener('open', (event) => {
      console.log('WebSocket connection opened:', event)
    })

    socket.addEventListener('message', (event) => {
      const message = JSON.parse(event.data)

      console.log('Received message:', message)
      // Procesa el mensaje según tus necesidades
    })

    socket.addEventListener('close', (event) => {
      console.log('WebSocket connection closed:', event)
    })

    return () => {
      // Cerrar la conexión cuando el componente se desmonta
      socket.close()
    }
  }, [user])

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {loading ? (
        <Center height={'100vh'}>
          <Spinner size={'lg'} />
        </Center>
      ) : (
        <MainRouter />
      )}
    </ChakraProvider>
  )
}
