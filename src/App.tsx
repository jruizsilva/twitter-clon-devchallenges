import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

import theme from './theme/theme'

import { MainRouter } from 'routes/MainRouter'
import { useUser } from 'business/user/useUser'
import { useAuthStore } from 'business/auth/useAuthStore'

export function App() {
  const { fetchUserData } = useUser()
  const { setUser } = useAuthStore()

  useEffect(() => {
    const AUTH_TOKEN = localStorage.getItem('AUTH_TOKEN')

    if (AUTH_TOKEN === null) {
      return
    }

    fetchUserData()
      .then((user) => {
        setUser(user)
        toast.success('Successfully login!', { id: 'login' })
      })
      .catch((err) => {
        console.log(err)
        localStorage.removeItem('AUTH_TOKEN')
      })
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <MainRouter />
    </ChakraProvider>
  )
}
