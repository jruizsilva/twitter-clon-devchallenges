import toast from 'react-hot-toast'
import { Center, Spinner } from '@chakra-ui/react'

import { Navbar } from 'components/ui'
import { Footer } from 'components/ui/Footer'
import { useUserQuery } from 'hooks/queries/useUserQuery'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export function MainLayout({ children }: Readonly<Props>) {
  const {
    isLoading: isLoadingUser,
    isError,
    error
    // refetch: refetchUser
  } = useUserQuery()

  if (isLoadingUser) {
    return (
      <Center height={'100vh'}>
        <Spinner />
      </Center>
    )
  }

  if (isError && error != null) {
    toast.error(error?.message)
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
