import { useCallback, useEffect } from 'react'
import toast from 'react-hot-toast'
import { Center, Spinner } from '@chakra-ui/react'

import { useAuthStore } from 'business/auth/useAuthStore'
import { useUser } from 'business/user/useUser'
import { Navbar } from 'components/ui'
import { Footer } from 'components/ui/Footer'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export function MainLayout({ children }: Readonly<Props>) {
  const { setUser, isLoading, setIsLoading } = useAuthStore()
  const { fetchUserData } = useUser()

  const fetchDataRequest = useCallback(() => {
    fetchUserData()
      .then((data) => {
        if (data !== undefined) {
          setUser(data)
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
  }, [fetchUserData, setIsLoading, setUser])

  useEffect(() => {
    const AUTH_TOKEN = localStorage.getItem('AUTH_TOKEN')

    const theme = localStorage.getItem('chakra-ui-color-mode')

    if (theme != null && theme === 'light') {
      localStorage.setItem('chakra-ui-color-mode', 'dark')
    }

    if (AUTH_TOKEN === null) {
      setIsLoading(false)

      return
    }
    fetchDataRequest()
  }, [fetchDataRequest, setIsLoading])

  return (
    <>
      {isLoading ? (
        <Center height={'100vh'}>
          <Spinner />
        </Center>
      ) : (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </>
  )
}
