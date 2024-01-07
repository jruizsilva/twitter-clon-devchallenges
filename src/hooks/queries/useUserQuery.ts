import { useQuery } from "@tanstack/react-query"

import { fetchUserData } from "services/user"

const useUserQuery = () => {
  const queryKey = ["user"]
  const queryFn = fetchUserData

  const { data, ...rest } = useQuery({
    queryKey, queryFn, retry: false
  })

  return {
    user: data,
    ...rest
  }
}

export {
  useUserQuery
}