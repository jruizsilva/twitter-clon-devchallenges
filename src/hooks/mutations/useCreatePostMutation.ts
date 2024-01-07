import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { fetchCreateOnePost } from "services/posts";

const useCreatePostMutation = () => {
  const queryClient = useQueryClient()
  const mutationKey = ['create-post']
  const mutationFn = fetchCreateOnePost

  const { mutate: addPost, ...rest } = useMutation({
    mutationKey, mutationFn, onSuccess: () => {
      toast.success('Post created successfully', {
        id: 'create-post',
        position: 'bottom-right'
      })
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    }
    , onError: (error) => {
      console.dir(error)
    },

  })

  return { addPost, ...rest }
}

export { useCreatePostMutation }