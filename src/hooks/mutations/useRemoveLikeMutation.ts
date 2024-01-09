import { useMutation, useQueryClient } from "@tanstack/react-query";

import { fetchRemoveLikeToPost } from "services/posts";


const useRemoveLikeMutation = (postId: string) => {
  const queryClient = useQueryClient()
  const mutationKey = ['remove-like']

  const mutationFn = async () => {
    return await fetchRemoveLikeToPost(postId)
  }

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ['posts'] })
    queryClient.invalidateQueries({ queryKey: ['postsCreated'] })
    queryClient.invalidateQueries({ queryKey: ['postsLiked'] })
    queryClient.invalidateQueries({ queryKey: ['postsSaved'] })
  }


  const { mutate: removeLike, ...rest } = useMutation({
    mutationKey, mutationFn, onSuccess,
    onError: (error) => {
      console.dir(error)
    },

  })

  return { removeLike, ...rest }
}

export { useRemoveLikeMutation }