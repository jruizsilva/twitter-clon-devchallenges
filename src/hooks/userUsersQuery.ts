import { useQuery } from "@tanstack/react-query"

import { fetchAllUsers } from "services/user"

const useUsersQuery = () => {
  const queryKey = ["users"]
  const queryFn = fetchAllUsers

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey, queryFn, retry: false
  })

  return {
    users: data,
    isLoading,
    isError,
    error,
    refetch
  }
}

export {
  useUsersQuery
}