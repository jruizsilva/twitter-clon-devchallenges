import { useQuery } from "@tanstack/react-query"

import { fetchAllPostsCreatedByUsername } from "services/posts"


const useFindUserByUsernameQuery = (username: string) => {
  const queryKey = [`profile/${"username"}`]

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey, queryFn: async () => {
      return await fetchAllPostsCreatedByUsername(username)
    },
    retry: false
  })

  return {
    postsCreated: data,
    isLoading,
    isError,
    error,
    refetch
  }
}

export {
  useFindUserByUsernameQuery
}