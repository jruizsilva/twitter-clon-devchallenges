import { useQuery } from "@tanstack/react-query"

import { fetchAllPostOfCurrentUser } from "services/posts"

const useUserPostsQuery = () => {
  const queryKey = ["userPosts"]
  const queryFn = fetchAllPostOfCurrentUser

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey, queryFn, retry: false
  })

  return {
    userPosts: data,
    isLoading,
    isError,
    error,
    refetch
  }
}

export {
  useUserPostsQuery
}