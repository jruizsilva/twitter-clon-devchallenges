import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { Center, Spinner } from '@chakra-ui/react'

import { useAuthStore } from 'business/auth/useAuthStore'
import { useUser } from 'business/user/useUser'
import { MainRouter } from 'routes/MainRouter'

export function App() {
  const { setUser, isLoading, setIsLoading } = useAuthStore()
  const { fetchUserData } = useUser()

  useEffect(() => {
    const AUTH_TOKEN = localStorage.getItem('AUTH_TOKEN')

    if (AUTH_TOKEN === null) {
      setIsLoading(false)

      return
    }

    fetchUserData()
      .then((data) => {
        if (data !== undefined) {
          setUser(data)
          console.log('Datos obtenidos:', data)
          toast.success('Successfully login!', {
            id: 'login',
            position: 'bottom-right'
          })
        }
      })
      .catch((err: any) => {
        console.dir(err)
        localStorage.removeItem('AUTH_TOKEN')

        toast.error(err.message, {
          id: 'error',
          position: 'bottom-right'
        })
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [setUser, fetchUserData, setIsLoading])

  return (
    <>
      {isLoading ? (
        <Center height={'100vh'}>
          <Spinner />
        </Center>
      ) : (
        <MainRouter />
      )}
    </>
  )
}
