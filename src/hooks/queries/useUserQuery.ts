import { useQuery } from "@tanstack/react-query"

import { fetchUserData } from "services/user"

const useUserQuery = () => {
  const queryKey = ["user"]
  const queryFn = fetchUserData

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey, queryFn, retry: false
  })

  return {
    user: data,
    isLoading,
    isError,
    error,
    refetch
  }
}

export {
  useUserQuery
}