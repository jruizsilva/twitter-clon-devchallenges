import { useQuery } from '@tanstack/react-query'

import { fetchAllFollowersByUsername } from 'services/user';

const useFindAllFollowersQuery = (username: string) => {
  const queryKey = ["followers"]

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey,
    queryFn: async () => {
      return await fetchAllFollowersByUsername(username)
    },
    retry: false,
    refetchOnWindowFocus: false,
  })

  return {
    followers: data,
    isLoading,
    isError,
    error,
    refetch
  }
}

export { useFindAllFollowersQuery }
