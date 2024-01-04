import { useQuery } from '@tanstack/react-query'

import { useUser } from 'business/user/useUser';

const useUserQuery = () => {
  const { fetchUserData } = useUser()

  return {
    useFetchUserData: () => {
      return useQuery({
        queryKey: ['fetchUserData'],
        queryFn: fetchUserData,
      })
    }

  }
}

export { useUserQuery }
