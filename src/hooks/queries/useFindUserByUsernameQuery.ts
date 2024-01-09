import { useQuery } from '@tanstack/react-query'

import { fetchFindUserByUsername } from 'services/user'

const useFindUserByUsernameQuery = (username: string) => {
  const queryKey = [`profile/${username}`]

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey,
    queryFn: async () => {
      return await fetchFindUserByUsername(username)
    },
    retry: false
  })

  return {
    userProfile: data,
    isLoading,
    isError,
    error,
    refetch
  }
}

export { useFindUserByUsernameQuery }
