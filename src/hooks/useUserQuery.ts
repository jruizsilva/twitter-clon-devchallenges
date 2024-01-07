import { useQuery } from "@tanstack/react-query"

import { fetchUserData } from "services/user"

const useUserQuery = () => {
  const queryKey = ["user"]
  const queryFn = fetchUserData

  const { data: user, isLoading, isError, error } = useQuery({
    queryKey, queryFn
  })

  return {
    user,
    isLoading,
    isError,
    error
  }
}

export {
  useUserQuery
}