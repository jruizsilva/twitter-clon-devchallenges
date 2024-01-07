import { useMutation, useQueryClient } from "@tanstack/react-query";

import { fetchCreateOnePost } from "services/posts";



const useCreatePostMutation = (onSuccess: () => void) => {
  const mutationKey = ['create-post']
  const mutationFn = fetchCreateOnePost

  const { mutate, ...rest } = useMutation({
    mutationKey, mutationFn, onSuccess, onError: (error) => {
      console.dir(error)
    },

  })

  return { addPost: mutate, ...rest }
}

export { useCreatePostMutation }